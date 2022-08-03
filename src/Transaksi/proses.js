import React, {useState} from "react";
import Data from "../data";
import JudulHalaman from "../Navigasi/judulHalaman";
import {Link} from "react-router-dom"
import NavTransaksi from "./navTransaksi";
import {connect} from "react-redux";
import Nav from "../Navigasi/nav";

function Proses(props) {
  
    const {dataKeranjang, dataProses, dataSelesai } = props
    const [total, setTotal] = useState({
      dataKeranjang: dataKeranjang.length,
      dataTransaksi: dataProses.length + dataSelesai.length
    })
  if(props.dataProses.length === 0) {
    return (
      <>
       <Nav total={total} />
       
       <main>
       <JudulHalaman judul="Proses Cuyy" />
        <NavTransaksi />
        
        <p className="f-average text-center text-secondary lead my-5">Maaf tidak ada data Proses! </p>
       </main>
        
      </>
      )
  } else {
    return (
    <>
    
      <Nav total={total}/>
      
      <main>
      <JudulHalaman judul="Proses Cuyy" />
      <NavTransaksi />
      
     <div className="containerCardTransaksi">
      {props.dataProses.map((value, index) => {
        return (
          
       <div className="cardTransaksi px-2 m-3 border border-2" key={index}>
                  <div className="d-flex p-2 ">
                    <img src={"./img/img/"+value.gambar} className="img-fluid" alt="gambar"/>
                    <div className="informasi mx-2 d-flex flex-column w-50">
                        <p className="lead">
                            {value.nama}
                        </p>
                        <p className="text-muted mx-2">
                            Lorem Ipsum 
                        </p>
                        
                    </div>
                   </div>
                  <div className="d-flex justify-content-between">
                      <p className="text-secondary">Sedang Diproses</p>
                      <div className="d-flex">
                        <p className="hargaAwal text-dark fw-light"> {`(${value.jumlah})`} </p>
                        <p className="text-danger ms-1">{`Rp${Intl.NumberFormat().format(value.hargaAkhir)}`}</p>
                      
                      
                      
                     <Link to="/proses"> 
                        <button className="btn btn-sm btn-warning m-1"
                    onClick={() => props.tombolProses(index, setTotal)} id={index}>Selesai </button>
                     </Link>
               
                       </div>
                  
                  </div>
           </div>
          )
      })}
      </div>
      </main>
    </>
    
    )}
}


const stateProses = state => {
  return {
    dataProses: state.dataProses,
    dataSelesai: state.dataSelesai,
    dataKeranjang: state.dataKeranjang
  }
}

const actionProses = dispatch => {
  return {
    tombolProses: (e, c) =>  dispatch({
      type: "tombolProses",
      target: e,
      callBack: c
   })
  }
}
export default connect(stateProses, actionProses)(Proses);
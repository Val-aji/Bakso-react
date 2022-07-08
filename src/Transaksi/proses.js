import React from "react";
import Data from "../data";
import JudulHalaman from "../Navigasi/judulHalaman";
import NavTransaksi from "./navTransaksi";
import {connect} from "react-redux";

function Proses(props) {
  let data = props.dataProses
  
  return (
    <>
    
      <JudulHalaman judul="Proses Cuyy" />
      <NavTransaksi />
      
     <div className="containerCardTransaksi">
      {data.map((value, index) => {
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
                        </div>
                  
                  </div>
           </div>
          )
      })}
      </div>
    </>
    
    )
}


const stateDataProses = state => {
  return {
    dataProses: state.dataProses
  }
}
export default connect(stateDataProses)(Proses);
import Data from "../data";
import JudulHalaman from "../Navigasi/judulHalaman";
import {useState, useEffect} from "react";
import {connect} from "react-redux"
import Nav from "../Navigasi/nav";

function Menu(props) {
    let classCard = "cardMakan d-flex flex-column justify-content-between bg-secondary m-2 text-white shadow"
   const {dataKeranjang, dataProses, dataSelesai } = props
    const [total, setTotal] = useState({
      dataKeranjang: dataKeranjang.length,
      dataTransaksi: dataProses.length + dataSelesai.length
    })
    return(
        <>
         <Nav total={total} />
         
         <main>
          <JudulHalaman judul="Bakso Cuyy" />
          {Data.map((dataList, index) => {
            return (

            <div className="border-bottom p-3 d-flex flex-wrap my-2" key={index}>
                {dataList.map((value, index1) => {
                    return(
                    <div className={classCard} key={index1}>
                    
                        <img src={"./img/img/"+value.gambar} className="img-fluid" alt={value.gambar} />
                        
                        <p className="p-1 lead text-dark">
                            {value.nama}
                        </p>
                        
                        <div className="d-flex justify-content-end">
                            <p> 
                                {`Rp${Intl.NumberFormat().format(value.harga)}`}
                            </p>
                            
                            <button className="btn btn-danger btn-sm ms-3"
                            onClick={ e => 
                        props.pesanMenu(e.target.value, setTotal)}
                            value={value.id}>
                            pesan
                            </button>
                        </div>
                        
                        
                    </div>
                    )
                })}
            </div>
            )
          })}
         </main>
           
        </>
    
    )

}

const stateData = state => {
  return {
    dataKeranjang: state.dataKeranjang,
    dataProses: state.dataProses,
    dataSelesai: state.dataSelesai
 
  }
}

const actionData = action => {
  return {
    pesanMenu: (e, c) => action({type: "pesanMenu", idMenu: e, callBack: c })
}}
export default connect(stateData, actionData)(Menu);




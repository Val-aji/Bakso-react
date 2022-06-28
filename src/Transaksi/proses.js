import React from "react";
import Data from "../data";
import JudulHalaman from "../Navigasi/judulHalaman";
import NavTransaksi from "./navTransaksi";

function Proses() {
  let data = [Data[0][2], Data[1][4]];      
  console.info(data);
  
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
                      <p className="text-danger">{value.harga}</p>
                  </div>
           </div>
          )
      })}
      </div>
    </>
    
    )
}

export default Proses;
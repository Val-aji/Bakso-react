import React from "react";
import Data from "../data";
import JudulHalaman from "../Navigasi/judulHalaman";
import NavTransaksi from "./navTransaksi";

function Selesai() {
  
  let data = [Data[0][0], Data[1][1]];
  return (
   <>
    <JudulHalaman judul="Selesai Cuyy" />
    <NavTransaksi />
    
    <div className="containerCardTransaksi">  
      {data.map((value, index) => {
      return (
      <div className="cardTransaksi px-2 m-3 border border-2" key={index}>
            <div className="d-flex p-2 ">
            
               <img className="img-fluid" src={"./img/img/"+value.gambar} alt={value.nama} />
                 <div className="informasi mx-2 d-flex flex-column w-50">
                     <p className="lead">
                            {value.nama}
                      </p>
                     <span className="text-danger mx-2">{value.harga}
                     </span>
                     <p className="text-muted mx-2">
                            Lorem Ipsum 
                     </p>
                 </div>
           </div>
                  
           <div className="d-flex justify-content-between px-2">
                   <p className="text-warning lead">★ ★ ★ ★</p>
                   <p className="btn btn-secondary btn-sm">Selesai</p>
           </div>
     </div>
     )
      })}
    </div>
    
   </>
  )
}

export default Selesai;
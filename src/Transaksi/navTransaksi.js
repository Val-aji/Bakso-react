import React from "react";
import Proses from "./proses";
import Selesai from "./selesai";

function NavTransaksi() {
  
  
  return (
    <>
     <div className="p-3 d-flex justify-content-around">
    
                <a href="/proses"
                className="btn btn-primary ">
                    Proses
                </a>
                <a href="/selesai"
                className="btn btn-primary">
                    Selesai
                </a>
                
                
               
   
     </div>
  
  </>
  )
}

export default NavTransaksi;
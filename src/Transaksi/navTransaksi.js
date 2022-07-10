import React from "react";
import Proses from "./proses";
import Selesai from "./selesai";
import {Link} from "react-router-dom"
function NavTransaksi() {
  
  
  return (
    <>
     <div className="p-3 d-flex justify-content-around border-bottom">
    
                <Link to="/proses"
                className="btn btn-primary ">
                    Proses
                </Link>
                <Link to="/selesai"
                className="btn btn-primary">
                    Selesai
                </Link>
   
     </div>
  
  </>
  )
}

export default NavTransaksi;
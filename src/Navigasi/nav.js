import React from "react";
import {useState, useEffect} from "react";
import {BrowserRouter,Route, Link, Switch} from "react-router-dom";
import {connect} from "react-redux";

function Nav(props) {
    const classNavbar = "nav bg-dark d-flex flex-column justify-content-center align-items-center position-fixed px-2 top-0 bottom-0";
    const classTombol = "btn btn-link  btn-primary text-white text-decoration-none w-100 my-4 tombolNav position-relative";
    
    const [jumlahDk, setJumlahDK] = useState(1)
    
    
    
    return (
            <div id="navbar" className={classNavbar}> 
                 {/* LAYAR HP TOMBOL CLOSE*/}
                 <button 
                    className="d-md-none btn btn-close position-absolute top-0 end-0 bg-white" 
                    onClick={()  => {
                    const nav = document.querySelector(".nav").classList.toggle("d-none")
                    
                    
                    }}
                    >    
                  </button>
                  
               {/* tombol keranjang */}
              
                <Link
                  to="/"
                  className={classTombol}
                >
                  Home
                 
                </Link>
                
                <Link
                  to="/keranjang"
                  className={classTombol}
                 
                >
                  Keranjang
                  <p className=" totalCard text-warning">({props.total.dataKeranjang})</p>
                </Link>
                
                
                <Link
                  to="/proses"
                  className={classTombol}
                  
                >
                  Transaksi
                  <p className=" totalCard text-warning"> ({props.total.dataTransaksi})</p>
                </Link>
                
                
                <Link
                  to="/tentang"
                  className={classTombol}
                >
                  Tentang
                </Link>
                
                 
            </div>
            

        )
}


export default Nav;
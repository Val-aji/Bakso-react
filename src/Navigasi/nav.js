import React from "react";
import {useState} from "react";
import {BrowserRouter,Route, Link, Switch} from "react-router-dom";

function Nav() {
    let classNavbar = "bg-dark d-flex flex-column justify-content-center align-items-center position-relative"
    let classTombol = "btn btn-link  btn-primary text-white text-decoration-none w-100 my-4 tombolNav"
    let listTombol = [["/", "Menu"], ["/keranjang", "Keranjang"], ["/proses", "Tranksaksi"], ["/tentang", "Tentang"]];
    
    
    
    
    return (
            <div id="navbar" className={classNavbar}> {
                    (window.innerWidth < 768) ? 
                    <button 
                    className="btn btn-close position-absolute top-0 end-0 bg-white" 
                    onClick={() => document.querySelector("nav").classList.toggle("d-none")}>    
                    </button> : undefined }
                    
              {listTombol.map((value, index) => {
                return (
                <Link key={index}
                to={value[0]}
                id={index}
                className={classTombol}
             
                >
                {value[1]}
                </Link>
                )
              })}
                 
            </div>
            

        )
}


export default Nav;
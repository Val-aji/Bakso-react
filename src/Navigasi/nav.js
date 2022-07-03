import React from "react";
import {useState} from "react";

function Nav() {
    let classNavbar = "bg-dark d-flex flex-column justify-content-center align-items-center position-relative"
    let classTombol = "btn btn-link  btn-primary text-white text-decoration-none w-100 my-4"
    let listTombol = [["/", "Menu"], ["/keranjang", "Keranjang"], ["/proses", "Tranksaksi"], ["/tentang", "Tentang"]];
    
    let [home, setHome] = useState("menu");
    
    


    return (
            <div id="navbar" className={classNavbar}> {
                    (window.innerWidth < 768) ? 
                    <button 
                    className="btn btn-close position-absolute top-0 end-0 bg-white" 
                    onClick={() => document.querySelector("nav").classList.toggle("d-none")}>    
                    </button> : undefined }
                    
                    
             
                {listTombol.map((value, index) => {
                    return(
                        <a href={value[0]}
                        className={classTombol} 
                        
                        onClick={() => setHome(value[0])}
                        
                        
                        key={index}>
                            {value[1]}
                        </a>
                    )
                })}
                

            </div>
            

        )
}


export default Nav;
import React from "react";

function Nav() {
    let classNavbar = "bg-dark d-flex flex-column justify-content-center align-items-center position-relative"
    let classTombol = "btn btn-link  btn-primary text-white text-decoration-none w-100 my-4"
    let listTombol = ["Home", "Keranjang", "Tranksaksi", "Tentang"];
    

    return (
            <div id="navbar" className={classNavbar}>
                {
                    (window.innerWidth < 768) ? 
                    <button 
                        className="btn btn-close position-absolute top-0 end-0 bg-white" 
                        onClick={() => document.querySelector("nav").classList.toggle("d-none")}>    
                    </button> : undefined }

                {listTombol.map((value, index) => {
                    return(
                        <button className={classTombol} key={index}>
                            {value}
                        </button>
                    )
                })}

            </div>

        )
}


export default Nav;
import Data from "../data";
import JudulHalaman from "../Navigasi/judulHalaman";
import React, {useState, useEffect} from "react";


function Menu() {
    let classCard = "cardMakan d-flex flex-column justify-content-between bg-secondary m-2 text-white";

    let [tes, setTes] = useState(["satu", "dua"])
    let [vari, setVari] = useState("Vari");

    useEffect(() => {
        vari === "vari" ? setVari("Vari diubah") : setVari("vari");

    }, [tes])

    let x = tes;
    function ubahTes() {
        
        
        tes.push("ketiga")
        setTes([tes])
        
        console.log(tes[1])

    }


    return(
        
        <>
            <b>{vari}</b>
            <br />


            {x.map((value2, index2) => {
                return (
                    <b key={index2}> {value2} </b>
                )
            })}    


            <button className="btn btn-link" onClick={ubahTes}>Klik Saya</button>
            
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
                                {Intl.NumberFormat().format(value.harga)}
                            </p>
                            
                            <button className="btn btn-danger btn-sm ms-2">
                            pesan
                            </button>
                        </div>
                        
                        
                    </div>
                    )
                })}
            </div>
            )
          })}
          
        </>
    
    )

}

export default Menu;




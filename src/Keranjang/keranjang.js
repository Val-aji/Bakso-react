import React, {useState, useEffect} from "react";

import data from "../data"


function Keranjang() {
    
    
    let dataList = [data[0][1], data[0][4], data[1][3]];
    let classCard = "cardList d-flex border-bottom my-2 position-relative";
    let classFooter = "position-fixed start-0 end-0 bottom-0 d-flex justify-content-between p-2 bg-secondary";
    
    let totalHarga = 0;
    
    let [jumlah, setJumlah] = useState(0)
    
    useEffect(() => {
        console.info("total harga bertambah")
    }, [totalHarga]);
    
    
    return(
        <>
            <div className="p-3">
                {dataList.map((value, index) => {
                    return (

                        <div className={classCard} key={index}>
                            <img src={"img/"+value.gambar} className="img-fluid" id="gambarKeranjang" />
                            {// 40%/hp 30% laptop 
                            }
                            
                            <div className="informasi d-flex flex-column m-2">
                            {// my-2 mx-5 (laptop) //
                            }
                            
                                <p className="lead">
                                    {value.nama}
                                </p>
                                
                                <p className="mx-2 text-danger">
                                    {
                                    value.harga*jumlah}
                                </p>
                                
                                <div className="d-flex">
                                <button className="btn btn-primary"
                                    onClick={() => { 
                                totalHarga -= value.harga * jumlah;
                                if(jumlah > 1)  {
                                    setJumlah(jumlah--);
                                } else {
                                    setJumlah(1)
                                }}}>
                                    -
                                    </button>
                                    <p className="m-2"> {jumlah} </p>
                                    
                                    <button className="btn btn-primary" 
                                    onClick={() => {
                                setJumlah(jumlah++);
                                totalHarga += value.harga * jumlah;
                                    }}> + 
                                    </button>
                                </div>
                                
                                <input type="text" placeholder="Keterangan..." className="form-control border-primary my-2" />
                            
                            
                            <input type="radio" className="position-absolute top-0 end-0" />
                                    
                            </div>
                    </div>
                    )
                })}
            </div>
            
            <div id="footer" className={classFooter}> 
                <div className="d-flex flex-column">
                    <span className="text-warning lead">
                        {totalHarga}
                    </span>
                    
                    <span className="text-white" style={{fontSize: ".8em"}}>
                    Sudah termasuk pajak
                    </span>
                </div>
                
                <button className="btn btn-primary btm-sm">Pesan Sekarang</button>
                

            </div>
        </>
    )
}

export default Keranjang;
    
                
            
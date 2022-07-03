import React, {useState} from "react";
import JudulHalaman from "../Navigasi/judulHalaman";
import data from "../data";


function Keranjang() {
    
    
    let dataList = [data[0][1], data[0][4], data[1][3]];
    let classCard = "cardList d-flex border-bottom my-2 position-relative";
    let classFooter = "position-fixed  end-0 d-flex start-0 bottom-0 justify-content-between p-2 bg-secondary";
    
    let [jumlah, setJumlah] = useState(1)
    let [totalHarga, setTotalHarga] = useState(0);
    
    
    
    return(
        <>
        <JudulHalaman judul="Keranjang Cuyy" />
            <div className="p-3 mb-5">
                {dataList.map((value, index) => {
                    return (

                        <div className={classCard} key={index}>
                            <img src={"./img/img/"+value.gambar} className="img-fluid" id="gambarKeranjang" alt="gambar"/>
                            {// 40%/hp 30% laptop 
                            }
                            
                            <div className="informasi d-flex flex-column px-1 mb-3">
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
                                
                                if(jumlah > 1)  {
                                    setJumlah(jumlah -= 1);
                                    setTotalHarga(totalHarga -= value.harga)
                                } else {
                                    setJumlah(1)
                               
                                }}}>
                                    -
                                    </button>
                                    <p className="m-2"> {jumlah}
                                     </p>
                                    
                                    <button className="btn btn-primary" 
                                    onClick={() => {
                                setJumlah(jumlah += 1);
                                setTotalHarga(totalHarga += value.harga)
                                    }}> + 
                                    </button>
                                </div>
                                
                                <input type="text" placeholder="Keterangan..." className="form-control border-primary my-2" />
                            
                            
                            <input type="checkbox" className="position-absolute top-0 end-0" />
                                    
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
    
                
            
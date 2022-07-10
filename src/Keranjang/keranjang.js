import React, {useState, useEffect} from "react";
import JudulHalaman from "../Navigasi/judulHalaman";
import data from "../data";
import {connect} from "react-redux";


function Keranjang(props, e) {
    
    let classCard = "cardList d-flex border-bottom my-2 position-relative";
    let classFooter = "position-fixed  end-0 d-flex start-0 bottom-0 justify-content-between p-2 bg-secondary";
    
    
    let dataList = props.dataKeranjang
    if(props.dataKeranjang.length === 0) {
      return (
        <>
           <JudulHalaman judul="Keranjang Cuyy" />
           <p className="text-center f-average text-secondary lead my-5">Maaf tidak ada data Keranjang! </p>
         </>
        )
    } else {
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
                   {props.harga[index]}
                                </p>
                                
                                <div className="d-flex">
                                <button className="btn btn-primary"
                      onClick={props.setJumlah}
                      value="kurang"
                      id={index}>
                           -     
                             </button>
                                    <p className="m-2"> {props.jumlah[index]}
                                     </p>
                                    
                                    <button className="btn btn-primary" 
                                    onClick={props.setJumlah}
                     value="tambah"
                     id={index}> + 
                                    </button>
                                </div>
                                
                                <input type="text" placeholder="Keterangan..." className="form-control border-primary my-2" />
                            
                            
                            <input type="checkbox" className="position-absolute top-0 end-0" 
                    onClick={props.setJumlah}
                    value="cekCeklis"
                    id={index}
                    
                            />
                                    
                            </div>
                    </div>
                    )
           
                })}
            </div>
         
            
            <div id="footer" className={classFooter}> 
                <div className="d-flex flex-column">
                    <span className="text-warning lead">
                        {`Rp${Intl.NumberFormat().format(props.total)}`}
                    </span>
                    
                    <span className="text-white" style={{fontSize: ".8em"}}>
                    Sudah termasuk pajak
                    </span>
                </div>
                
                <button className="btn btn-primary btm-sm" onClick={props.checkout}>Pesan Sekarang</button>
                

            </div>
    
        </>
    )}
}

const stateDataKeranjang = state => { return {
    dataKeranjang: state.dataKeranjang,
    jumlah: state.jumlah,
    harga: state.harga,
    total: state.total
    
}}

const actionKeranjang = dispatch => {
  return {
    
    setJumlah: e => dispatch({
      type:"setJumlah", 
      idKeranjang: e.target.id, 
      valueKeranjang: e.target.value
    }),
    checkout: () => dispatch({type:"checkout"})
    
  }}
 
export default connect(stateDataKeranjang, actionKeranjang)(Keranjang);
    
                
            
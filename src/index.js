import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter} from "react-router-dom";
import App from './App';
import data from "./data"
import {createStore} from "redux";
import {Provider} from "react-redux";

let dataProduk = {
  dataKeranjang: [data[1][1]],
  jumlah: [1],
  harga: [18000],
  total: 18000,
  dataProses: [],
  dataSelesai: []
}


const reducer = (state = dataProduk, action) => {
  switch(action.type) {
  case "pesanMenu" :
       let idMenu = action.idMenu.toString()
       const awal = parseInt(idMenu[0]) - 1;
       const akhir = parseInt(idMenu.substr(1)) - 1;
       
       state.dataKeranjang.push(data[awal][akhir])
       
       state.jumlah.push(1)
       action.callBack({
         dataKeranjang: state.dataKeranjang.length,
         dataTransaksi: state.dataProses.length + state.dataSelesai.length})
       return {
         ...state,
         harga: state.dataKeranjang.slice().map((value, index) => value.harga * state.jumlah[index]),
         total: state.total + data[awal][akhir].harga
        }
    
   break;
   // end pesanMenu and start setJumlah
   case "setJumlah":
         
        const idK = action.idKeranjang;
        const valueK = action.valueKeranjang
        const hargaAwal = state.dataKeranjang[idK].harga;
        
        if(valueK === "tambah" ) {
          state.jumlah[idK] += 1 ;
          state.harga[idK] += hargaAwal;
          state.total += hargaAwal
        } else if(valueK === "kurang"){ 
          if( state.jumlah[idK] >= 1 ) {
             state.jumlah[idK] -= 1 ;
             state.harga[idK] -= hargaAwal;
             state.total -= hargaAwal
             
          }
        } 
       return {
         ...state
       }
      break;
 case "checkout":
   // nama gambar hargaAkhir jumlah
      state.dataKeranjang.map((value, index) => {
        let fakeDataProses = {}
        fakeDataProses.nama = value.nama
        fakeDataProses.gambar = value.gambar
        fakeDataProses.hargaAkhir = value.harga * state.jumlah[index]
        fakeDataProses.jumlah = state.jumlah[index]
        if(fakeDataProses.jumlah === 0) {
          return;
        }
        state.dataProses.push(fakeDataProses)
      })
      action.callBack({
         dataKeranjang: state.dataKeranjang.length,
         dataTransaksi: state.dataProses.length + state.dataSelesai.length})
      const filterKeranjang = state.dataKeranjang.filter((v, i) => state.jumlah[i] === 0)
     return {
       ...state,
       dataKeranjang: filterKeranjang,
       total: 0
     }
  
   break;
   case "tombolProses":
    let id = action.target
    function tombolProses() {
      alert(`pesanan ${state.dataProses[id].nama} telah selesai`);
      state.dataSelesai.push(state.dataProses[id])
      delete state.dataProses[id]
      action.callBack({
         dataKeranjang: state.dataKeranjang.length,
         dataTransaksi: state.dataProses.length})
    }
    
    tombolProses()
     return {
       ...state
     }
     
     break;
 // end setJumlah and start default
  default:
     return state
  }
}

const storeRedux = createStore(reducer)

ReactDOM.render(
  <Provider store={storeRedux}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);



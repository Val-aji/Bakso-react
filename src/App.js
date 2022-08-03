import React from "react";
import {BrowserRouter, Routes, Link, Route} from "react-router-dom";
import Nav from "./Navigasi/nav";
import Menu from "./Menu/menu";
import Keranjang from "./Keranjang/keranjang";
import Proses from "./Transaksi/proses";
import Selesai from "./Transaksi/selesai";
import Tentang from "./Tentang/tentang";
import {connect} from "react-redux";

function App(props) {
 
  return (
     <BrowserRouter>
         
            <Routes>
            <Route path="/"
            element={<Menu />}
            />
            
            <Route path="/keranjang"
            element={<Keranjang />}
            />
            <Route path="/proses"
            element={<Proses />}
            />
            <Route path="/selesai"
            element={<Selesai />}
            />
            <Route path="/tentang"
            element={<Tentang />}
            />
            
            </Routes>
           
        
     </BrowserRouter>
  )
}

export default App;


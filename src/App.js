import React from "react";
import {BrowserRouter, Routes, Link, Route} from "react-router-dom";
import Nav from "./Navigasi/nav";
import Menu from "./Menu/menu";
import Keranjang from "./Keranjang/keranjang";

import Proses from "./Transaksi/proses";
import Selesai from "./Transaksi/selesai";

import Tentang from "./Tentang/tentang";


function App() {
  

  return (
    <div>
      
    
      <nav>
        <Nav />
      </nav>
      
      <main>
      
        
        
        <BrowserRouter>
         
          <Routes>
            <Route path="/"
            element={<Menu />}
            />
           </Routes>
          
          <Routes>
            <Route path="/keranjang"
            element={<Keranjang />}
            />
           </Routes>
           
           <Routes>
            <Route path="/proses"
            element={<Proses />}
            />
           </Routes>
           
           <Routes>
            <Route path="/selesai"
            element={<Selesai />}
            />
           </Routes>
           
           <Routes>
            <Route path="/tentang"
            element={<Tentang />}
            />
           </Routes>
          
          
        </BrowserRouter>
        
       
      </main>
      
    
    </div>
  )
}

export default App;

import React from "react";
import JudulHalaman from "../Navigasi/judulHalaman";


function Tentang() {
  let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  
  let arrTentang = ["Visi dan Misi", "Sejarah", "Tujuan"];
  
  return (
    <> 
    
      <JudulHalaman judul="Tentang Cuyy" />
      
      <div className="p-3">
        {arrTentang.map((value, index) => {
          return (
            <div className="border-bottom my-2" key={index}>
            <h2 className="lead">{value}</h2>
            <p className="p-3 f-openSans "> {lorem} </p>     
            </div>
            
            )
        })}
      
      </div>
      
    </>
    
  )
}

export default Tentang;
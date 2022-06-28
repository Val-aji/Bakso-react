import React from "react";

function JudulHalaman(props) {
    let tombolClose = "btn btn-link text-primarh text-decoration-none  fs-1 position-absolute top-0";

    return(
        <div id="JudulHalaman" className="border-bottom pt-3">
            <p className="display-6 text-center text-dark w-100">
                {props.judul}
            </p>
            {(window.innerWidth < 768) ?  <button className={tombolClose} onClick={() => {
                document.querySelector("nav").classList.toggle("d-none");
                
            }}> ⟩⟩ </button> : undefined}

        </div>
    )
}

export default JudulHalaman;
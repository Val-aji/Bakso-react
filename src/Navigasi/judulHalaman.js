import React from "react";

function JudulHalaman(props) {
    let tombolToggle = "btn btn-link text-primary text-decoration-none  fs-1  position-absolute top-0 d-md-none";

    return(
        <div id="JudulHalaman" className="border-bottom pt-3">
            <p className="display-6 text-center text-dark w-100">
                {props.judul}
            </p>
            <button className={tombolToggle} onClick={() => {
                document.querySelector(".nav").classList.toggle("d-none");
                
            }}> ⟩⟩ </button>

        </div>
    )
}

export default JudulHalaman;
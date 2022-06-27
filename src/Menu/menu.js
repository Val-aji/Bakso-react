import Data from "../data";

function Menu() {
    let classCard = "cardMakan d-flex flex-column justify-content-between bg-secondary m-2 text-white";

    return(
        <>

          {Data.map((dataList, index) => {
            return (

            <div className="border-bottom p-3 d-flex flex-wrap my-2" key={index}>
                {dataList.map((value, index1) => {
                    return(
                    <div className={classCard} key={index1}>

                        <img src={"img/"+value.gambar} className="img-fluid" />
                        
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



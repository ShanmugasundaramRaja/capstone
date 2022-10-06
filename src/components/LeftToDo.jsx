
import React from "react"
import NewWeather from "./NewWeather";


export default function LeftToDo(){




 


  
 
 

    return(
        <>
       
        <div className="gif1" style={{width:"100%",height:"300px",borderRadius:'24px',margin:'10px',color:'whitesmoke'}}>
       
         <NewWeather/>

        </div>
        <div  style={{width:"100%",height:"47%",borderRadius:'24px',margin:'10px',backgroundColor:'whitesmoke'}}>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 imgcov" style={{borderRadius:"24px"}} src="https://www.bizadmark.com/wp-content/uploads/2021/08/print-ad-2.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 imgcov" style={{borderRadius:"24px"}} src="https://www.bizadmark.com/wp-content/uploads/2021/08/heinz10.jpeg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 imgcov" style={{borderRadius:"24px"}} src="https://www.bizadmark.com/wp-content/uploads/2021/08/print-ad-2.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
    
        </>
    )
        
}
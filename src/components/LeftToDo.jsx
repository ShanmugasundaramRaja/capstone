import { useState } from "react";
import React from "react"


export default function LeftToDo(){

  const [data,setData]=useState([])
  const[place,setPlace]=useState()
  const APPkey = "a8e75072cafbdeb1e4142039e44d882c";
  let city;

function handleChange(e){
city=e.target.value
}



 
const   handleSubmit= async ()=> {
  setPlace(city)
 
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APPkey}&units=metric`

  
    await fetch(url)
    .then(response => response.json())
    .then(file => {setData(file)
    console.log(file)

    
    

    })
    .catch(() => {
     console.log("Error");
    });
  
};


  
 
 

    return(
        <>
       
        <div className="gif1" style={{width:"100%",height:"48%",borderRadius:'24px',margin:'10px',color:'whitesmoke'}}>
       
          <h1 >{data.name} 10 °C
          
</h1><h1>Windy</h1><br /><br /><br /><br /><br /><br />
<div className="pb-3"><input type="text" style={{borderRadius:"24px"}} value={place} onChange={handleChange}/><button style={{borderRadius:"24px",backgroundColor:"lightyellow"}} onClick={handleSubmit}>Submit</button></div>

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
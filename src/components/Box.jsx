

import {React,useState} from "react"
import Cards from "./Cards";



export default function Box(){
    
    const [names, setNames] = useState([]);
    let num;


    function handleChange(e){
num=e.target.value
console.log(num)


    }

    function handleSubmit(){
for(var i=0;i<num;i++){
   setNames(current=>[...current,num])
}
    }

  
    return (
      <div>
        <input type="text"  onChange={handleChange} />
        <button onClick={handleSubmit}>Click</button>
        
  
        {names.map(( index) => {
          return (
            <div key={index}>
             <Cards change={handleChange}/>
            </div>
          );
        })}
      </div>
    );
  }
import React from "react";
import { useState,useEffect,} from "react";


export default function Exp(){
    const [color,setColor]=useState('blue');
    

    

   

    useEffect(()=>{
        console.log({color})
    },[])
    useEffect(()=>{
        console.log({color})
    },[{color}])
    
    useEffect(() => {
        return () => {
            console.log('unmounted')
        }
    })

    return(
        <>
       
        <button onClick={()=>setColor('red')}>Change</button>
        
        <h1>{color}</h1></>
        
        

    )
}
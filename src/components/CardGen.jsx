import {React} from "react"
import { useState } from "react"
import Cards from "./Cards";



    export default function CardGen() {
      const [names, setNames] = useState([0]);
    
      const handleClick = () => {
        // 👇️ push to end of state array
        setNames(current => [...current,0]);
    
        // 👇️ spread an array into the state array
        // setNames(current => [...current, ...['Carl', 'Delilah']]);
    
        // 👇️ push to beginning of state array
        // setNames(current => ['Zoey', ...current]);
      };
    
      return (
        <div>
          <div>
            <button onClick={handleClick}>Push to state array</button>
          </div>
    
          {names.map((element, index) => {
            return (
              <div key={index}>
               <Cards place={element}/>
              </div>
            );
          })}
        </div>
      );
    }
    
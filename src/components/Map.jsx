import React from "react";
import { MapContainer, TileLayer,useMap } from 'react-leaflet'
import { Marker,Popup } from "react-leaflet";


export default function Map(){

    return(
        

            

        
            <MapContainer style={{height:'30vh'}} center={[48.8606, 2.3376]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[48.8584, 2.2945]}>
    
    <Popup>
     Eiffel Tower, <br /> Paris.
    </Popup>
  </Marker>
  <Marker position={[48.8606, 2.3376]}>
    
    <Popup>
      Louvre Museum, <br /> Paris.
    </Popup>
  </Marker>
  <Marker position={[48.8530, 2.3499]}>
    
    <Popup>
      Notre Dame, <br /> Paris.
    </Popup>
  </Marker>
</MapContainer>

    )
}
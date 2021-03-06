import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import style from './styleMap';
import "../alojamento.css"

const MapPage = ({onDbl = (lat:string, lng:string) =>{}}) =>{


    const GOOGLE_KEY = String(process.env.REACT_APP_GOOGLE_KEY) // NOT THE BEST WAY

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey:  GOOGLE_KEY,
    })
    const postion = {
      lat:  -22.4712738, 
      lng: -43.2081975
    }

    return(
     <div className="mapApp">
        {  isLoaded ? (
      <GoogleMap
       
        mapContainerStyle={{width: '100%', height: '100%'}}
        center={postion}
        zoom={15}
       
      >
        { /* Child components, such as markers, info windows, etc. */ }
        
        
                            
                            <Marker 
                            
                             position={{
                              lat: postion.lat, 
                              lng: postion.lng
                            }} options={{
                              label: {
                                text: "Alojamento 01",
                                className: 'map-marker'
                              }
                              
                            }}
                            key={"MARKER['keyId']"}
                             />
                            
                        
      
      </GoogleMap>
  ) : <p>NAO FOIG ERADO</p>}
    </div>
    
    )
}


export default MapPage
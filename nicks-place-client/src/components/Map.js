import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 33.554330310241966, lng: -82.89563459258274
  }

  const locations = [
      {
        name: "Nick's Place", 
        location: {
            lat: 33.554330310241966, 
            lng: -82.89563459258274
      }
    }
]
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyA3EIeAg6KMD07DFv4UQbAzbW142mrJSdQ'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
        {
            locations.map(item => {
                return (
                    <Marker key={item.name} position={item.location}/>
                )
            })
        }
        </GoogleMap>
     </LoadScript>
  )
}

export default Map;
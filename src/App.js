import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkData from "./data/skateboard-parks.json";


// console.log("Token: " + process.env.REACT_APP_MAPBOX_TOKEN);

const token = "pk.eyJ1IjoiYndhamhhIiwiYSI6ImNraW9oMHF6djBpZ3YydG1scmd1a25rMW8ifQ.eYn8XWXgNseMQWBO2MKR-w";


export default function App() {
const [viewport, setViewport] = useState({
  latitude: 45.4211,
  longitude: -75.6903,
  width: "100vw",
  height: "100vh",
  zoom: 10
});

const [selectedPark, setSelectedPark] = useState(null);

useEffect(() => {
  const listener = e => {
    if (e.key === "Escape") {
      setSelectedPark(null)
;    }
  };
  window.addEventListener("keydown", listener);

  return () => {
    window.removeEventListener("keydown", listener);
  }

}, []); 

  return (
  <div> 
    <ReactMapGL 
      {...viewport} 
      mapboxApiAccessToken={token}
      mapStyle={"mapbox://styles/bwajha/ckioqbr0v50rt17ujrdui5ew0"}
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      > 

    {parkData.features.map((park) => (

      <Marker
      key={park.properties.PARK_ID}
      latitude={park.geometry.coordinates[1]}
      longitude={park.geometry.coordinates[0]}
      >
        <button className="marker-btn" onClick={(e) =>{
        e.preventDefault();
        setSelectedPark(park);
        console.log("click");
      }}>
          <img src="/skateboarding.svg" alt="SkatePark Icon"/>
        </button>
      </Marker>
    ))}
      {selectedPark ? (
        <div className="popup-wrapper">
        <Popup
        className="popup"
        latitude={selectedPark.geometry.coordinates[1]}
        longitude={selectedPark.geometry.coordinates[0]}
        onClose={() =>{
          setSelectedPark(null);
        }}
      >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
        </div>
      ):null}
    </ReactMapGL>
  </div>
  );
}

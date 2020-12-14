import React, {useState} from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import * as parkData from "./data/skateboard-parks.json";

console.log("Token: " + process.env.REACT_APP_MAPBOX_TOKEN);

const token = "pk.eyJ1IjoiYndhamhhIiwiYSI6ImNraW9oMHF6djBpZ3YydG1scmd1a25rMW8ifQ.eYn8XWXgNseMQWBO2MKR-w";

export default function App() {
const [viewport, setViewport] = useState({
  latitude: 45.4211,
  longitude: -75.6903,
  width: "100vw",
  height: "100vh",
  zoom: 10
})


  return (
  <div> 
    <ReactMapGL {...viewport} 
      mapboxApiAccessToken={token}
      mapStyle={"mapbox://styles/bwajha/ckioqbr0v50rt17ujrdui5ew0"}
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      > 

    {parkData.features.map((park) => (

      <Marker
      key={park.properties.PARK_ID}
      latitude={park.geometry.coordinates[0]}
      longitude={park.geometry.coordinates[1]}
      >
        <div>Skate!</div>
      </Marker>
    ))}

    </ReactMapGL>
  </div>
  );
}

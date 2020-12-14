import React, {useState} from 'react';
import ReactMapGL from "react-map-gl";


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
      mapboxApiAccessToken={token}> Markers here
    </ReactMapGL>
  </div>
  );
}

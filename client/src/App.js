import React from 'react';
import './App.css';
import LeafletComponent from "./Map"
import Calendar from "./Calendar"
import {Map as LeafletMap, TileLayer} from "react-leaflet";

function App() {
    fetch("http://localhost:8080/event")
    return (
    <div>
        <LeafletComponent />
        <Calendar/>
    </div>

    )
}


export default App;

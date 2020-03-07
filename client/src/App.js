import React from 'react';
import './App.css';
import LeafletComponent from "./Map"
import Calendar from "./Calendargit a"
import {Map as LeafletMap, TileLayer} from "react-leaflet";

function App() {

    return (
    <div>
        <LeafletComponent />
        <Calendar/>
    </div>

    )
}


export default App;

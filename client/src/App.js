import React from 'react';
import './App.css';
import LeafletComponent from "./Map"
import Calendar from "./Calendar"
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

import React from 'react';
import './App.css';
import LeafletComponent from "./Map"
import Calendar from "./Calendar"
import {Map as LeafletMap, TileLayer} from "react-leaflet";
import { getData} from "./globalVariable";

function App() {
    return (
    <div>
        <LeafletComponent />
        <Calendar data="{getData()}"/>
    </div>

    )
}


export default App;

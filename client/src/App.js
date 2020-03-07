import React from 'react';
import './App.css';
import LeafletComponent from "./Map"

function App() {
    fetch("http://localhost:8080/event")
    return (

        <LeafletComponent />

    )
}

export default App;

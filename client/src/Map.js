import React from 'react';
import { Map as LeafletMap, TileLayer, } from "react-leaflet"
import Pastille from "./Pastille"


class LeafletComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            lat: 48.45,
            lng: -68.53,
            zoom: 13,
            data: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/event").then(res => res.json()).then(data => {
            this.setState({
                data: data
            })
        })
    }

    renderPastilles() {
        return this.state.data.map(el => {
            const obj = { lat: el.Coordinate[1], lng: el.Coordinate[0] }
            const desc = [el.NomDeLOeuvre, el.NomArtiste, el.Categorie, el.Promoteur]

            return <Pastille key={el.NumerosDeFiche} position={obj} popupMessage={desc} data={el}></Pastille>
        })

    }


    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <>
                <LeafletMap center={position} zoom={this.state.zoom} id="map" style={{ position: "static" }}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    {this.renderPastilles()}

                </LeafletMap>
            </>
        );
    }
}



export default LeafletComponent
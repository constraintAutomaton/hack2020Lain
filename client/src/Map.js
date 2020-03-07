import React from 'react';
import { Map as LeafletMap, TileLayer } from "react-leaflet"


class LeafletComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            lat: 48.45,
            lng: -68.53,
            zoom: 13
        }
    }
    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <LeafletMap center={position} zoom={this.state.zoom} id="map" style={{ position: "static" }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />

            </LeafletMap>
        );
    }
}

export default LeafletComponent
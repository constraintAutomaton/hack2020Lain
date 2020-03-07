import React from 'react';
import { Marker, Popup } from "react-leaflet"

class Pastille extends React.Component {
    render() {
        return (
            <Marker position={this.props.position}>
                <Popup >
                    {this.props.popupMessage.map((p, i) => (<p key={i}>{p}</p>))}
                </Popup>
            </Marker>
        )
    }
}

export default Pastille


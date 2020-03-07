import React from 'react';
import { Marker, Popup } from "react-leaflet"

class Pastille extends React.Component {
    constructor() {
        super()
        this.state = {
            isAdding: false
        }
    }

    render() {
        return (
            <>
                <Marker position={this.props.position} >
                    <Popup onClose={() => this.setState({ isAdding: false })}>
                        {this.props.popupMessage.map((p, i) => {
                            const isTitle = i === 0
                            const titleStyle = { fontWeight: "bold" }
                            return <p key={i} style={isTitle ? titleStyle : {}}>{p}</p>
                        })}

                        {!this.state.isAdding && <button className={"popup-button"} onClick={() => this.setState({ isAdding: true })}>Ajouter au calendrier</button>}
                        {this.state.isAdding &&
                            <>
                                <div className="calendar-picker">

                                    <input type="date"></input>
                                    <input type="time"></input>
                                    <input type="time"></input>

                                </div>
                                <div className="picker-buttons">

                                    <button className={"popup-button"}>Ajouter</button>
                                    <button className={"popup-button"} style={{ backgroundColor: "#f44336" }} onClick={() => this.setState({ isAdding: false })}>Annuler</button>
                                </div></>
                        }
                    </Popup>
                </Marker >
            </>

        )
    }
}

export default Pastille


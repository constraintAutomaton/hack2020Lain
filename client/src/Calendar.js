import React from "react";
import { getData } from "./globalVariable";

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            data:[]
        }
    }
    clickEvent(){
        this.setState({isOpen: !this.state.isOpen,data:getData()});
    }
    render() {
        const date = "dimanche 8 mars";
        return (<div className={'calendar' + (this.state.isOpen ? " calendar-active" : "")}
                    onClick={() => this.clickEvent()}>
            <div id={'popup-title'}>
                <span>Calendrier</span>
                <span>{date}</span>
            </div>
            <ul>
                {this.state.data.map(objet => <li className={'start'}key="{objet.NomDeLOeuvre}">
                    <img
                        src={'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                        alt={"marker"}/>
                    <div className={'location'}>{objet.NomDeLOeuvre}</div>
                    <div className={'hour'}>
                        <span>{objet.startHour}</span>
                        <span>{objet.endHour}</span>
                    </div>
                </li>)}
                <li type="button" className={'calendar-button'}>
                    <span>Partager</span>
                    <span className={'co2'}>Score Vert: <em>334</em></span>
                </li>
            </ul>

        </div>)
    }
}

export default  Calendar
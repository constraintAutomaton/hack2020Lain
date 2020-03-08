import React from "react";
import { getData } from "./globalVariable";

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            data: [],
            randomName: ""
        }
    }

    componentDidMount() {
        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        const rname = makeid(5)

        this.setState({ randomName: rname })
    }

    clickEvent() {
        this.setState({ data: getData() });
    }

    onShare() {
        const n = this.state.randomName
        fetch(`http://localhost:8080/schedule/${n}`, { method: "POST" })
    }
    render() {
        const date = "dimanche 8 mars";
        return (<div className={'calendar' + (this.state.isOpen ? " calendar-active" : "")}
            onClick={() => this.clickEvent()}>
            <div id={'popup-title'} onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
                <span>Calendrier</span>
                <span>{date}</span>
            </div>
            <ul>
                {this.state.data.map(objet => <li className={'start'} key="{objet.NomDeLOeuvre}">
                    <img
                        src={'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                        alt={"marker"} />
                    <div className={'location'}>{objet.properties.NOM_DE_L_OEUVRE}</div>
                    <div className={'hour'}>
                        <span>{objet.startHour}</span>
                        <span>{objet.endHour}</span>
                    </div>
                </li>)}
                <li type="button" className={'calendar-button'} onClick={() => this.onShare()}>
                    <span>Partager</span>
                    <span className={'co2'}>Score Vert: <em>334</em></span>
                </li>
            </ul>

        </div>)
    }
}

export default Calendar
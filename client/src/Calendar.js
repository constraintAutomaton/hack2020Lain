import React from "react";

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }
    render() {
        const date = "dimanche 8 mars";
        const objets = [
        {"location":"L'esprit des lieux",
            "startHour":"10:00",
        "endHour":"13:00"},
        {"location":"Cap à l'Est",
            "startHour":"10:00",
            "endHour":"13:00"},
        {"location":"destination finale",
            "startHour":"10:00",
            "endHour":"13:00"},
            {"location":"Cap à l'Est",
                "startHour":"10:00",
                "endHour":"13:00"},
            {"location":"Cap à l'Est",
                "startHour":"10:00",
                "endHour":"13:00"},
            ]
        return <div className={`calendar`}>
            <div id={'popup-title'}>
                <span >Calendrier</span>
                <span >{date}</span>
            </div>
            <ul>
                {objets.map(objet=><li className={'start'}>
                    <img src={'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt={"marker"}/>
                    <div className={'location'}>{objet.location}</div>
                    <div className={'hour'}>
                        <span>{objet.startHour}</span>
                        <span>{objet.endHour}</span>
                    </div>
                </li>)}
                <li type="button" className={'calendar-button'}><span>Partager</span></li>
            </ul>

        </div>
    }
}

export default  Calendar
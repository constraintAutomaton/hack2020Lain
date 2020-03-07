import React from "react";

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }
    render() {
        const locations = ["L'esprit des lieux","Cap à l'Est", "destination finale" ]
        const date = "dimanche 8 mars";
        const startHour = "10:00";
        const endHour = "13:00";
        return <div className={`calendar`}>
            <div id={'popup-title'}>
                <span >Calendrier</span>
                <span >{date}</span>
            </div>
            <ul>
                {locations.map(location=><li className={'start'}>
                    <img src={'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt={"marker"}/>
                    <div className={'location'}>{location}</div>
                    <div className={'hour'}>
                        <span>{startHour}</span>
                        <span>{endHour}</span>
                    </div>
                </li>)}
            </ul>
        </div>
    }
}

export default  Calendar
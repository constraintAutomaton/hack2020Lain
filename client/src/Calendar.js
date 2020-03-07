import React from "react";

class Calendar extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
        }
    }
    goToTop(){
        isOpen: true;

    }
    render() {
        const lieux = ["L'esprit des lieux","Cap à l'Est", "destination finale" ]
        const date = "dimanche 8 mars";
        return <div className={`calendar`} onClick={this.goToTop}>
            <span>Calendrier</span>
            {date}
            <ul>
                {lieux.map(lieu=><div>{lieu}</div>)}
            </ul>
        </div>
    }
}

export default  Calendar
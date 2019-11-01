import React from "react";

const PlayerCard = (props) => {

    return(
        <div className="card">
            <h1>{props.name}</h1>
            <h3>{props.country}</h3>
            <p>{props.searches}</p>
        </div>
    )
}

export default PlayerCard;
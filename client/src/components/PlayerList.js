import React from "react";
import axios from "axios"
import PlayerCard from "./PlayerCard"

class PlayerList extends React.Component{
    constructor(){
        super();
        this.state = {
            playerList : []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/api/players")
            .then((response)=>{
              this.setState({
                  playerList : response.data
              })  
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    render(){
        return(
            <div className="cardList">
                {this.state.playerList.map((item,index)=>(
                    <PlayerCard key={index} name={item.name} country={item.country} searches={item.searches}/>
                ))}
            </div>
        )
    }

}

export default PlayerList;
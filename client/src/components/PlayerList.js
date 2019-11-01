import React from "react";
import axios from "axios"

class PlayerList extends React.Component{
    constructor(){
        super();
        state = {
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
            .catch((response)=>{
                console.log(error);
            })
    }

    render(){
        return(
            <div>

            </div>
        )
    }

}
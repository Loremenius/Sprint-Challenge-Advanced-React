import React from "react";
import axios from "axios"
import PlayerCard from "./PlayerCard"
import Navbar from "./Navbar";

class PlayerList extends React.Component{
    constructor(){
        super();
        this.state = {
            originalPlayerList : [],
            viewedPlayerList : [],
            sortedPlayerList:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/api/players")
            .then((response)=>{
              this.setState({
                originalPlayerList : response.data,
                viewedPlayerList: response.data,
              })  
              
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    changeList(array){
        this.setState({
            viewedPlayerList: array
        });
    }

    render(){
        return(
            <div className="cardList">
                <Navbar ogList = {this.state.originalPlayerList} changeList = {this.changeList}/>
                {this.state.viewedPlayerList.map((item,index)=>(
                    <PlayerCard key={index} name={item.name} country={item.country} searches={item.searches}/>
                ))}
            </div>
        )
    }

}

export default PlayerList;
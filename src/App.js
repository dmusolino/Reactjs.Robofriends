import React, {Component} from "react";
import CardList from "./CardList";
import {Robots} from './Robots'
import SearchBox from './SearchBox'
import './app.css'



class App extends Component {

    constructor(){
        super()
        this.state = {
            Robots: Robots, 
            SearchField: ''}
        
        }

     onSearchChange = (event) => {
        
        this.setState({SearchField: event.target.value})
        
    
    }
 
    render() {

         const filteredRobots = this.state.Robots.filter(robot => {
            
            return robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase());})
            console.log(filteredRobots)

        return ( <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox SearchChange = {this.onSearchChange}/>
        <CardList Robots={filteredRobots}/> 
        
        
    </div>)
    }

}


export default App
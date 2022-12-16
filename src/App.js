import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import Scroll from './scroll' ;
import ErrorBoundry from "./ErrorBoundry";
import './app.css';



class App extends Component {

    constructor(){
        super()
        this.state = {
            Robots: [], 
            SearchField:''}
        
        }

     componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({Robots:users}))
     }

     onSearchChange = (event) => {
        
        this.setState({SearchField:event.target.value})
        
    
    }
 
    render() {

         const filteredRobots = this.state.Robots.filter(robot => {
            
            return robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase());})
            console.log(filteredRobots)

        return ( <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox SearchChange = {this.onSearchChange}/>
        <Scroll>
         <ErrorBoundry>
            <CardList Robots={filteredRobots}/> 
          </ErrorBoundry>
        </Scroll>
        
    </div>)
    }

}


export default App
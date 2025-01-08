import {Component} from "react";
import User from "./user";
import UserClass from "./UserClass";
class About extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log("parent component mount")
    }
    render(){
        return(
            <div>
                <h1>this is about us page</h1>
                <User name={"vinayak "}/>
                <UserClass name={"vinayak (classes)"} location={"ghaziabad"}/>
                <UserClass name={"alki musk (classes)"} location={"ohio"}/>
            </div>
        )
    }
    
}

export default About;
import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:0
        }
    }
    render(){
        const {name,location}=this.props;
        const {count}=this.state
        return(
            <div className="user-card">
                <h1>count:{this.state.count}</h1>
                <h2>Name:{name}</h2>
                <h2>location:{location}</h2>
                <h2>contact: 10022</h2>
            </div>
        )
    }
}

export default UserClass
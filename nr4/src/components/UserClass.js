import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:0
        }
        // console.log(this.props.name+"child constructor")
    }
    componentDidMount(){
        // console.log(this.props.name+"child component mount")
    }
    render(){
        const {name,location}=this.props;
        const {count,count2}=this.state;
        // console.log(this.props.name+"child render")

        return(
            <div className="user-card">
                <h1>count:{this.state.count}</h1>
                <h1> count:{this.state.count2}</h1>
                <button
                onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                        count2:this.state.count2+1
                    })
                }}>
                    count increase
                </button>
                <h2>Name:{name}</h2>
                <h2>location:{location}</h2>
                <h2>contact: 10022</h2>
            </div>
        )
    }
}

export default UserClass
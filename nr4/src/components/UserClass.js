import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{//data in these are dummy but then we will update it
                login:"bunny",
                id:"shimla",
                avatar_url:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/portal/c/logo_2022.png"
            }
        }
        // console.log(this.props.name+"child constructor")
    }
    async componentDidMount(){
        // console.log(this.props.name+"child component mount")
        const data=await fetch("https://api.github.com/users/yoursanonymous");
        const json=await data.json();

        this.setState({
            userInfo:json
        })
        console.log(json)
    }
    componentDidUpdate(){
        console.log("update");
    }
    componentWillUnmount(){
        console.log("unmount");
    }
    render(){
        const {login,id, avatar_url}=this.state.userInfo;
        // console.log(this.props.name+"child render")

        return(
            <div className="user-card">
                <h2>Name:{login}</h2>
                <h2>location:{id}</h2>
                <h2>image:<img src={avatar_url}/></h2>
                
                <h2>contact: 10022</h2>
            </div>
        )
    }
}
// in this the 1st time the cosntrctor  is called then the render which render the dumny data which was given in the constructor
// then the componenetDidMount was called which fetches the api data after that we call the <this.setState>then render its data again by calling the render function
// there is another thing called componentDidUpdate that is caleld afetr all teh above things have happened
// another one componentWillUnmount will be called when the component will be unmounted that will be when we change the page


export default UserClass
import { Component } from "react";
import User from "./user";
import UserClass from "./UserClass";
import userContext from "../utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("parent component mount");
  }
  render() {
    // const []
    return (
      <div>
        <h1>this is about us page</h1>
        <User name={"vinayak "} />
        <div>
          loggedInUser=
          <userContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
              )}
          </userContext.Consumer>
        </div>
        <UserClass name={"vinayak (classes)"} location={"ghaziabad"} />
        <UserClass name={"alki musk (classes)"} location={"ohio"} />
      </div>
    );
  }
}

export default About;

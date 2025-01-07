import User from "./user";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div>
            <h1>this is about us page</h1>
            <User name={"vinayak "}/>
            <UserClass name={"vinayak (classes)"} location={"ghaziabad"}/>
        </div>
    )
}
export default About;
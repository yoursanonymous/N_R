import { useState } from "react"
const User=({name})=>{
    const [count]=useState(0)
    const [count2]=useState(1);
    return(
        <div className="user-card">
            <h1>count={count}</h1>
            
            <h2>Name: {name}</h2>
            <h2>location:ghaziabad</h2>
          Khatoo, Rajasthan 332602  <h2>contact: 10022</h2>
        </div>
    )
}
export default User
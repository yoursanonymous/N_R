import { createContext } from "react";
//this is  used only when you have put things in many things
// you dont have to put everything here
const userContext=createContext({
    loggedInUser:"default user"
})

export default userContext
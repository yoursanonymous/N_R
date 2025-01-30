import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
    const [isSignInForm,setIsSignForm]=useState();
    const toggleSignForm=()=>{
        setIsSignForm(!isSignInForm);
    }
  return (
    <div className="bg-black">
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg"
          alt="bg image"
        />
      </div>
      <div>
        <form className="w-3/12 h-100 p-12 bg-black my-56 absolute mx-auto right-0 left-0 opacity-85">
          <h1 className="text-white  font-bold text-4xl">{isSignInForm?"Sign In":"Sign Up"}</h1>
          {!isSignInForm && (
            <>
            <input  className="px-2 py-3 my-4 bg-black text-white border-white border-2 w-full" placeholder="First Name"type="text"/>
          <input  className="px-2 py-3 my-4 bg-black text-white border-white border-2 w-full" placeholder="Last Name"type="text"/>
            </>
          )} 
          <input
            className="px-2 py-3 my-4 bg-black text-white border-white border-2 w-full"
            type="text"
            placeholder="email address"
          />
          <input
            className="px-2 py-3 my-4 bg-black text-white border-white border-2 w-full"
            type="text"
            placeholder="password"
          />
          {!isSignInForm && 
            <input  className="px-2 py-3 my-4 bg-black text-white border-white border-2 w-full" placeholder="confirm pasword"type="text"/>
          } 
          <button className="text-white border my-4 p-4 bg-red-700 border-black rounded-md w-full">
          {isSignInForm?"Sign In":"Sign Up"}
          </button>
          <p className="text-white cursor-pointer" onClick={toggleSignForm}>{isSignInForm?"New to neflix? sign up":"already a user sign in"}</p>

        </form>
      </div>
    </div>
  );
};

export default Login;

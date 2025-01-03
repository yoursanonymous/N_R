import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import RestrauntCard from "./components/RestrauntCard.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import Error from "./components/Error.js";
import RestrauntMenu from "./components/RestrauntMenuPage.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/restraunts/:resId",
    element:<RestrauntMenu />
  }
],
    errorElement:<Error/>
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

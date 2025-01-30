import React from 'react'
import Login from './login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
const Body = () => {
    const appRouter =createBrowserRouter([
        {
            path:"/",
        },
        {
            path:"/login",
            element:<Login/>
        },{
            path:"/browser",
            element:<Browse/>
        },
    ]);
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
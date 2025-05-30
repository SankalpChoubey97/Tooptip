// import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Navbar } from "./features/navbar/Navbar"
import { Tooltip } from "./features/tooltip/Tooltip"

function App() {

  const router=createBrowserRouter([
    {
      path:'/', element:<Navbar/>, children:[
        {index:true, element:<Tooltip/>}
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={(router)}/>
    </>
  )
}

export default App

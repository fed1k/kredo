import React from 'react'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import {Contact,Program} from './pages/index'
const App = () => {
  const route=createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
           path:'/affilate-program',
           element:<Program/>
        }
      ]
    }
  ])
  return <RouterProvider router={route}/>
}

export default App

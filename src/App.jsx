import React from 'react'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Contact from './pages/Contact'
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
        }
      ]
    }
  ])
  return <RouterProvider router={route}/>
}

export default App

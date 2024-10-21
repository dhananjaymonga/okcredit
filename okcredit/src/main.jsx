import ReactDom from 'react-dom/client'
import React from 'react'
import User from './content/User.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Data from './content/Data.jsx'

 const router = createBrowserRouter ([
  {
    path : '/',
    element : <App/>

  },
  {
    path:'/:id',
    element:<User/>
  }
])

ReactDom.createRoot(document.getElementById('root')).render(
  <Data>
  <RouterProvider router={router}/>
  </Data>
)

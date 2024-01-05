import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageError from './errors/PageError'

import Navbar from './components/Root/Navbar'
import Root from './components/Root/Root'
import Footer from './components/Root/Footer'

import Home from './components/Home/Home'

import Events from './components/Events/Events'
import Register from './components/Events/Register/Register'

import Shop from './components/Shop/Shop'
import Buy from './components/Shop/Buy'

import Profile from './components/Profile/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <><Navbar /><PageError /><Footer/></>,
    children: [  
      { 
        path: '/',
        element: <Home />
      }, 
      { 
        path: '/sorties',
        element: <Events />
      }, 
      { 
        path: '/sorties/inscription/:event_id',
        element: <Register />
      }, 
      { 
        path: '/goodies',
        element: <Shop />
      }, 
      { 
        path: '/goodies/acheter/:goodie_id',
        element: <Buy />
      }, 
      { 
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/admin',
        element: <a href="https://annski.applikuapp.com/admin">Se connecter en tant qu'admin</a>
      }
    ]
  }
], {
  basename: "/"
})

function App() {
  return <RouterProvider router={router} />
}

export default App

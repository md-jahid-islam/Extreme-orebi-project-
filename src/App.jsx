
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Journal from './Pages/Journal'
import LayoutOne from './Layout/LayoutOne'

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<LayoutOne/>}>
        <Route index element = {<Home/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/shop' element = {<Shop/>} />
      <Route path='/contact' element = {<Contact/>} />
      <Route path='/journal' element = {<Journal/>} />
        </Route>
      
      </Route>
    )
  )

  return (
    <>

    <RouterProvider router={route} />
    </>
  )
}

export default App

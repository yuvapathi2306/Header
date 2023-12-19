import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services';
import Products from './pages/Products';
import Contactus from './pages/Contactus';
import Signup from './pages/Signup';
import Notfound from './pages/Notfound';
// import {Switch} from 'react-dom'
function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/About' Component={About}/>
      <Route path='/services' Component={Services}/>
      <Route path='/products' Component={Products}/>
      <Route path='/contactus' Component={Contactus}/>
      <Route path='/signup' Component={Signup}/>
      <Route Component= {Notfound}/>
    </Routes>
   </Router>
  )
}

export default App;
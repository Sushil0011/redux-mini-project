import React from 'react'
import './style/app.scss'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Component/Home'
import NabvBar from './Component/NabvBar'
import About from './Component/About'
import Project from './Component/Project'
import Contact from './Component/Contact'


const App = () => {
  return (
    
<div className='wrapper'>
<h1>Admin Table</h1>


  <NabvBar/>
    <Router>



      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>

      
      </Routes>
    </Router>
    </div>
  )
}

export default App
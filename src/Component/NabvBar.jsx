import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import '../style/nav.scss'
const NabvBar = () => {
  return (
    <div className='navbar'>


<a href='/'>Home</a>
<a href='/about'>About</a>
<a href='/project'>Project</a>
<a href='/contact'>Contact</a>


    </div>
  )
}

export default NabvBar
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { deleteuser } from '../slices/userslice';
const DisplayUser = ({elem,index}) => {
  // console.log(index)

  const dispatch=useDispatch();


    const remove=(id)=>{
      console.log(id)
      dispatch(deleteuser(id))

    }
  return (
    <>

    <li>{elem}  <DeleteForeverIcon  className='del'  onClick={()=>remove(index)} /></li>

</>
    
  )
}

export default DisplayUser;
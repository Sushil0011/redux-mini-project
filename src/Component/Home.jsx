import React from "react";
import "../style/home.scss";
import '../style/responsive.scss'
import fakedata from "../api/index";

import { useDispatch } from "react-redux";

import { adduser,deleteall } from "../slices/userslice";
import { useSelector } from "react-redux";
import DisplayUser from "./DisplayUser";

const Home = () => {
const dispatch=useDispatch();

const user=useSelector((state)=>{
  return   state.myreducers
  
})
// console.log(user);


// onCLick Functions
const addnewuser=(data)=>{
  dispatch(adduser(data))
  
}



const removeAllusers=()=>{
  alert("Are you sure")
  dispatch(deleteall())
}






  return (
    <>
      <div className="list">
        <h2>List of user Details</h2>
        <button  onClick={()=>addnewuser(fakedata())}>Add New User</button>
      </div>
      <hr></hr>

      <div className="userWrapper">
        
        <div className="userdata">
        {
            user.map((elem,index)=>{
              // console.log(elem,index)
              return(
              <DisplayUser  key={index} elem={elem}  index={index}/>
              )

            })
        }
        </div>
        
        
        <button onClick={removeAllusers}>Clear All Users</button>
      </div>
    </>
  );
};

export default Home;

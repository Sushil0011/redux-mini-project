import {createReducer} from "@reduxjs/toolkit"

const initialState=[];
const myreducer=createReducer(initialState,{
    adduser(state,action){},
    deleteuser(state,action){},
    deleteall(state,action){}
}


)

export default myreducer;
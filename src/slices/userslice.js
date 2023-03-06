import {createSlice} from "@reduxjs/toolkit"




const users=createSlice({
    name:"user",
    initialState:[],
    reducers:{
    adduser(state,action){
        state.push(action.payload)

    },
    deleteuser(state,action){
        // console.log(action.payload)
        console.log(state)
        state.splice(action.payload,1)
        // state.pop(action.payload)
            
                
        

    },
    deleteall(state,action){
        return []
    }
    }
})
export const {adduser,deleteall,deleteuser}= (users.actions);
export default users;
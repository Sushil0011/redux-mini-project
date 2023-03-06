import {configureStore} from "@reduxjs/toolkit"
import users from '../slices/userslice'


   const store=configureStore( {
    reducer:{
       myreducers:users.reducer,
    }
   
    


    
})
export default store;
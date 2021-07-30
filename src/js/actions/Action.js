
import { ADD_TASK , DONE_TASK } from "../connst/ActionTypes"


export const addtask = (payload) => {
    return { 
     type : ADD_TASK, 
     payload ,
    };
}


export const donetask = (payload) => {
    return { 
     type : DONE_TASK, 
     payload ,
    };
}

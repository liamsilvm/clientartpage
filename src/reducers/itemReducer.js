/* 
a reducer is hwere our state is going to go. This si where we check our action. 


We will have the get items action, add items action, and dispatch to reducer. THis creates  apayload. 


We would send server response to the reducer, and then from there add it to the react components. 

This is a sort of system that allows you to get past the downward data flow in react. 


*/ 

import {v1 as uuid} from 'uuid'; 
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'; 


const initialState = { 
    items: [
        {
            id: uuid(), 
            name: 'Eggs'
        }, 
        {
            id: uuid(), 
            name: 'Milk'
        }, 
        {
            id: uuid(), 
            name: 'Steak'
        }, 
        {
            id: uuid(), 
            name: 'Water'
        }
    ]
}

export default function(state  = initialState, action) { 
    switch(action.type){ 
        case GET_ITEMS: 
        return{ 
            ...state
        }
        default: 
            return state; 
    }
}
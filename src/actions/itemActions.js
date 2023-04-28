//this is where we are going to be making the requests to the back end. 

import {GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types'; 

export const getItems = () => { 
    return{ 
        type: GET_ITEMS
       
    }
}
/* 
the main point of reducers is to bring together all other reducers. 


If we were to add authentication later on, we would want an auth reducer, error reducer etc. 

the point of this is that it is a meeting place for everything. 




*/ 
import {combineReducers} from 'redux'; 
import itemReducer from './itemReducer'; 

export default combineReducers({ 
    item: itemReducer//add as many reducers as you want. 
    
})
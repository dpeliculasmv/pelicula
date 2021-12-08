import {CLEAR_SEARCH} from './actionType' 

export const reduxText = (text="", action) => {

 
    switch (action.type) {
       case CLEAR_SEARCH:
          return {
            text:"",
          }
          default:
            return text
    }
    
 }

 export default reduxText
import { UserData } from "../../types";

let initialState:UserData = null

const userData = (state = initialState, action: any) => {
    switch(action.type) {
        case 'UPDATE_USER_DATA':
            return action.payload
        default: 
            return state    
    } 
}

export default userData;
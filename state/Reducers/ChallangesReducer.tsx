import { Challanges } from "../../types";

let initialState:Challanges = null

const challangeData = (state = initialState, action: any) => {
    switch(action.type) {
        case 'UPDATE_CHALLANGE_DATA':
            return action.payload
        default: 
            return state    
    } 
}

export default challangeData;
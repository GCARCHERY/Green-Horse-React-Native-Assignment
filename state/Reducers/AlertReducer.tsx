import { AlertPage } from "../../types";

let initialState:AlertPage = "Challange";

const alertPage = (state = initialState, action: any) => {
    switch(action.type) {
        case 'UPDATE_ALERT_PAGE':
            return action.payload
        default: 
            return state    
    } 
}

export default alertPage;
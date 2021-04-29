let initialState = 0

const goldCounter = (state = initialState, action: any) => {
    switch(action.type) {
        case 'UPDATE_GOLD_COUNTER':
            return action.payload
        default: 
            return state    
    } 
}

export default goldCounter;
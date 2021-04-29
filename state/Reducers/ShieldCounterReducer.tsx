let initialState = 0

const shieldCounter = (state = initialState, action: any) => {
    switch(action.type) {
        case 'UPDATE_SHIELD_COUNTER':
            return action.payload
        default: 
            return state    
    } 
}

export default shieldCounter;
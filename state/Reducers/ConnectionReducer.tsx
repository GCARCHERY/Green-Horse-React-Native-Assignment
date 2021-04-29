let initialState = false

const isConnected = (state = initialState, action: any) => {
    switch(action.type) {
        case 'UPDATE_CONNECTION':
            return action.payload
        default: 
            return state    
    } 
}

export default isConnected;
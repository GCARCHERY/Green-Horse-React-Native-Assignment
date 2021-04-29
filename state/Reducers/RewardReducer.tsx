let initialState = false

const isRewardVisible = (state = initialState, action: any) => {
    switch(action.type) {
        case 'UPDATE_REWARD_VISIBILITY':
            return action.payload
        default: 
            return state    
    } 
}

export default isRewardVisible;
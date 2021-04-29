let initialState = false

const isDropdownVisible = (state = initialState, action: any) => {
    switch(action.type) {
        case 'UPDATE_DROPDOWN_VISIBILITY':
            return action.payload
        default: 
            return state    
    } 
}

export default isDropdownVisible;
/////////////////////////////////////////
/////////////// BASE USER ///////////////
/////////////////////////////////////////

import { Currency, UserData } from "../../types"

export const updateUserData = (payload: UserData) => {
    return {
        type: 'UPDATE_USER_DATA',
        payload
    }
}

export const updateGoldCounter = (payload: Currency) => {
    return {
      type: 'UPDATE_GOLD_COUNTER',
      payload
    }
}

export const updateShieldCounter = (payload: Currency) => {
    return {
      type: 'UPDATE_SHIELD_COUNTER',
      payload
    }
}
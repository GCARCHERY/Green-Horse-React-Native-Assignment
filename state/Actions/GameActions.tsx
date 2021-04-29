import { Challanges } from "../../types"

export const updateChallangeData = (payload: Challanges) => {
    return {
        type: 'UPDATE_CHALLANGE_DATA',
        payload
    }
}

export const updateRewardVisibility = (payload: boolean) => {
    return {
        type: 'UPDATE_REWARD_VISIBILITY',
        payload
    }
}

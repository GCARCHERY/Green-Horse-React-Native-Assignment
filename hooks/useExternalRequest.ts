import { Alert } from "react-native"
///////////////////////////////////////////////////////
import { GENERAL_ERROR } from "../constants/Errors"
///////////////////////////////////////////////////////
import { request, Request } from "../constants/Request/Request"
///////////////////////////////////////////////////////
import { updateChallangeData, updateRewardVisibility } from "../state/Actions/GameActions"
import { updateAlertPage, updateDropdownVisibility } from "../state/Actions/MenuActions"
import { updateGoldCounter, updateShieldCounter, updateUserData } from "../state/Actions/UserDataActions"
///////////////////////////////////////////////////////
import { store } from "../state/PersistConfig"

export async function fetchInitialData() {
    /////////////// -- RESET-STATE -- ///////////////////

    store.dispatch(updateRewardVisibility(true))
    store.dispatch(updateDropdownVisibility(false))
    store.dispatch(updateAlertPage("Challange"))

    /////////////// -- END-RESET-STATE -- ///////////////////

    /////////////// -- DECLARE-ERROR -- ///////////////////

    let error = false

    /////////////// -- END-DECLARE-ERROR -- ///////////////

    ///////////////////////////////////////////////////////

    /////////////// -- DECLARE-CONST -- ///////////////////

    const reduxData = store.getState()

    /////////////// -- END-DECLARE-CONST -- ///////////////

    ///////////////////////////////////////////////////////

    /////////////// -- FETCH-PROFILE -- ///////////////////
    let fetch_profile_route:Request = await request('fetch_profile', 'get', {})
    if(fetch_profile_route.status === 'success') {
        store.dispatch(updateUserData(fetch_profile_route.data))
        if(reduxData.shieldCounter === 0) {
            store.dispatch(updateShieldCounter(fetch_profile_route.data.level))
            store.dispatch(updateGoldCounter(fetch_profile_route.data.gold))
        }
    }else{
        error = true
    }
    /////////////// -- END-FETCH-PROFILE -- ///////////////

    ///////////////////////////////////////////////////////

    /////////////// -- FETCH-PROFILE -- ///////////////////
    let fetch_challanges_route:Request = await request('fetch_challanges', 'get', {})
    if(fetch_challanges_route.status === 'success') {
        store.dispatch(updateChallangeData(fetch_challanges_route.data))
    }else{
        error = true
    }
    /////////////// -- END-FETCH-PROFILE -- ///////////////

    ///////////////////////////////////////////////////////

    /////////////// -- DISPLAY-ERROR -- ///////////////////

    if(error) {
        Alert.alert(GENERAL_ERROR)
    }

    /////////////// -- END-DISPLAY-ERROR -- ///////////////
}

export async function collectReward() {
    /////////////// -- DECLARE-ERROR -- ///////////////////

    let error = false

    /////////////// -- END-DECLARE-ERROR -- ///////////////

    ///////////////////////////////////////////////////////

    /////////////// -- DECLARE-CONST -- ///////////////////

    const reduxData = store.getState()

    /////////////// -- END-DECLARE-CONST -- ///////////////

    ///////////////////////////////////////////////////////

    /////////////// -- COLLECT-REWARD -- //////////////////
    let collect_reward_route:Request = await request('claim_reward', 'post', {
        postParameters: {
            userId: reduxData.userData.userId
        }
    })
    if(collect_reward_route.status === 'success') {
        store.dispatch(updateRewardVisibility(false))
        store.dispatch(updateGoldCounter(reduxData.goldCounter + reduxData.challangeData.uncollectedReward.reward))
    }else{
        error = true
    }
    /////////////// -- END-COLLECT-REWARD -- //////////////

    ///////////////////////////////////////////////////////

    /////////////// -- DISPLAY-ERROR -- ///////////////////

    if(error) {
        Alert.alert(GENERAL_ERROR)
    }

    return collect_reward_route.status

    /////////////// -- END-DISPLAY-ERROR -- ///////////////
}
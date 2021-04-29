import { combineReducers } from 'redux';

import isConnected from './Reducers/ConnectionReducer';
import userData from './Reducers/UserDataReducer';
import shieldCounter from './Reducers/ShieldCounterReducer';
import goldCounter from './Reducers/GoldCounterReducer';
import isDropdownVisible from './Reducers/DropdownReducer';
import challangeData from './Reducers/ChallangesReducer';
import isRewardVisible from './Reducers/RewardReducer';
import alertPage from './Reducers/AlertReducer';

export const rootReducer = combineReducers({
    isConnected,
    userData,
    shieldCounter,
    goldCounter,
    isDropdownVisible,
    challangeData,
    isRewardVisible,
    alertPage
})
import { AlertPage } from "../../types"

export const updateDropdownVisibility = (payload: boolean) => {
    return {
      type: 'UPDATE_DROPDOWN_VISIBILITY',
      payload
    }
}

export const updateAlertPage = (payload: AlertPage) => {
  return {
    type: 'UPDATE_ALERT_PAGE',
    payload
  }
}
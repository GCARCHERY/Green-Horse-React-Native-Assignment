export const updateConnectionStatus = (payload: boolean) => {
    return {
        type: 'UPDATE_CONNECTION',
        payload
    }
}
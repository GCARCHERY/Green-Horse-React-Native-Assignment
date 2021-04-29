import { 
    Routes,
    routesObject
} from '../Routes';
import { 
    CONNECTION_ERROR, 
    GENERAL_ERROR 
} from '../Errors';
import NetInfo from "@react-native-community/netinfo";
import Axios from 'axios';
import { store } from '../../state/PersistConfig';

///////////////////////// REQUEST-TYPES /////////////////////////////

type requestParameters = {
    authentification?: {
        'Authorization': string 
    },
    getParameters?: getParameters,
    postParameters?: postParameters
}
type postParameters = any
type getParameters = string

///////////////////////// END-REQUEST-TYPES /////////////////////////

export async function request(route: Routes, method: 'get' | 'post', requestData?: requestParameters) {
    ///////////////////////// DEFINE INIT VARIABLES /////////////////////////
    let url = ''
    let isConnected = false
    let response_ = {status: 'requesting', data: {}, message: 'No message'}
    const state = store.getState();
    ///////////////////////// SELECT ROUTE /////////////////////////
    routesObject.map((element: any)=> {
        if(element.name === route) {
            url = element.url
        }
        if(requestData?.getParameters) {
            if(!url.includes(requestData?.getParameters)) {
                url+=requestData?.getParameters
            }
        }
    })
    ///////////////////////// CHECK CONNECTION /////////////////////////
    await NetInfo.fetch().then(state => {
        isConnected = state.isConnected
    })
    ///////////////////////// APPLY REQUEST /////////////////////////
    if(isConnected) {
        await Axios({
            method,
            url,  
            data: requestData?.postParameters,
            headers: requestData?.authentification
        })
        .then((response) => {
            let data__:any
            if(typeof response.data === 'string' && response.data.length > 0) {
                data__ = JSON.parse(response.data)
            }else{
                data__ = response.data
            }
            response_ =  { status: 'success', data: data__, message: data__.message ? data__.message : 'No message' }
        })
        .catch((error) => {
            response_ = { 
                status: 'error', 
                data: {
                    error_url: url, 
                    error_code: error.response ? error.response.status : 'Unknown error response status', 
                    error_content: error.response ? error.response.data : 'No response data', 
                    error_route: route 
                }, 
                message: error.response.data.message ? error.response.data.message : GENERAL_ERROR 
            }
        })
    }else{
        response_ =  { 
            status: 'error', 
            data: { connection_error: true }, 
            message: CONNECTION_ERROR 
        }
    }
    ///////////////////////// RETURN A RESPONSE /////////////////////////
    return response_
}

export type Request = {
    status: string, 
    data: any, 
    message: string 
}
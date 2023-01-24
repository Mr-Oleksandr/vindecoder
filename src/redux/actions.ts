import {ActionType, Action} from './actionsTypes';
import {  Dispatch } from 'redux'
import VinDecoderServices from "../services/vindecoderService";


const swapiDecoder = new VinDecoderServices()

export const getArticles = (vinCode: string) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({ type: ActionType.GET_ARTICLES_PENDING })
            const response = await swapiDecoder.getDecodeVin(vinCode)
            dispatch({ type: ActionType.GET_ARTICLES_SUCCESS, payload: response })
        } catch (err: any) {
            dispatch({ type: ActionType.GET_ARTICLES_FAIL, payload: err.message })
        }
    }
}
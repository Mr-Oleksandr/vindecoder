import { ActionType, Action } from './actionsTypes';
import { Dispatch } from 'redux';
import VinDecoderServices from '../services/vindecoderService';

const swapiDecoder = new VinDecoderServices();

export const getArticles = (vinCode: string) => {
   return async (dispatch: Dispatch<Action>) => {
      try {
         dispatch({ type: ActionType.GET_VINCODE_PENDING });
         const response = await swapiDecoder.getDecodeVin(vinCode);
         dispatch({ type: ActionType.GET_VINCODE_SUCCESS, payload: response });
      } catch (error: any) {
         dispatch({ type: ActionType.GET_VINCODE_FAIL, payload: error });
      }
   };
};

export const resetError = () => {
   return async (dispatch: Dispatch<Action>) => {
         return dispatch({ type: ActionType.GET_VINCODE_FAIL, payload: null });
   
   };
}
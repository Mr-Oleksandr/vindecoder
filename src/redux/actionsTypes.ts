import { IVinCodeData } from '../types/VinCode';

export enum ActionType {
   // eslint-disable-next-line no-unused-vars
   GET_VINCODE_PENDING = 'GET_VINCODE_PENDING',
     // eslint-disable-next-line no-unused-vars
   GET_VINCODE_SUCCESS = 'GET_VINCODE_SUCCESS',
     // eslint-disable-next-line no-unused-vars
   GET_VINCODE_FAIL = 'GET_VINCODE_FAIL',
}

interface actionPending {
   type: ActionType.GET_VINCODE_PENDING;
}

interface actionSuccess {
   type: ActionType.GET_VINCODE_SUCCESS;
   payload: {
      Results: IVinCodeData[];
      SearchCriteria: string;
   };
}

interface actionFail {
   type: ActionType.GET_VINCODE_FAIL;
   payload: string | null;
}

export type Action = actionPending | actionSuccess | actionFail;

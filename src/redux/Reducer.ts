import { IVinCodeData } from '../types/VinCode';
import { Action, ActionType } from './actionsTypes';

export interface State {
   articles: IVinCodeData[];
   vinCode: string[];
   loading: boolean;
   error: string | null;
}

const initialState = {
   articles: [],
   vinCode: [],
   loading: false,
   error: null,
};

const updateList = (array: string[], vincode: string) => {
   if (array.length >= 5 && !array.includes(vincode)) {
      const newArray = array.slice(1, array.length);
      return [...newArray, vincode];
   }
   if (array.includes(vincode)) {
      return [...array];
   } else {
      return [...array, vincode];
   }
};

export const articleReducer = (state: State = initialState, action: Action): State => {
   switch (action.type) {
      case ActionType.GET_VINCODE_PENDING:
         return {
            ...state,
            loading: true,
         };
      case ActionType.GET_VINCODE_SUCCESS:
         return {
            ...state,
            articles: action.payload.Results,
            vinCode: updateList(state.vinCode, action.payload.SearchCriteria),
            loading: false,
         };
      case ActionType.GET_VINCODE_FAIL:
         return {
            ...state,
            error: action.payload,
            loading:false
         };

      default:
         return state;
   }
};

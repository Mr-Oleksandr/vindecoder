import { IArticle } from '../types/Article'
import { Action, ActionType } from './actionsTypes'

export interface State {
    articles: IArticle[]
    vinCode: number[]
    loading: boolean
    error: string | null
}

const initialState = {
    articles: [],
    vinCode: [],
    loading: true,
    error: null,
}

const updateList = (array:number[], vincode:number) => {
    if(array.length >= 5){
        const newArray = array.slice(1,array.length)
        return [...newArray, vincode]
    }else{
        return [...array, vincode]
    }

}

export const articleReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.GET_VINCODE_PENDING:
            return {
                ...state,
                loading: true,
            }
        case ActionType.GET_VINCODE_SUCCESS:
            return {
                ...state,
                articles: action.payload.Results,
                vinCode: updateList(state.vinCode, action.payload.SearchCriteria),
                loading: false,
            }
        case ActionType.GET_VINCODE_FAIL:
            return {
                ...state,
                error: action.payload,
            }

        default:
            return state
    }
}

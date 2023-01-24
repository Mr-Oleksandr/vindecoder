import { IArticle } from '../Types/Article'
import { Action, ActionType } from './actionsTypes'

export interface State {
    articles: IArticle[]
    loading: boolean
    error: string | null
}

const initialState = {
    articles: [],
    loading: true,
    error: null,
}

export const articleReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.GET_ARTICLES_PENDING:
            return {
                ...state,
                loading: true,
            }
        case ActionType.GET_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: action.payload,
                loading: false,
            }
        case ActionType.GET_ARTICLES_FAIL:
            return {
                ...state,
                error: action.payload,
            }

        default:
            return state
    }
}
import { IArticle } from '../Types/Article'

export enum ActionType {
    GET_ARTICLES_PENDING = 'GET_ARTICLES_PENDING',
    GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS',
    GET_ARTICLES_FAIL = 'GET_ARTICLES_FAIL',
}

interface actionPending {
    type: ActionType.GET_ARTICLES_PENDING
}
interface actionSuccess {
    type: ActionType.GET_ARTICLES_SUCCESS
    payload: IArticle[]
}
interface actionFail {
    type: ActionType.GET_ARTICLES_FAIL
    payload: string
}

export type Action = actionPending | actionSuccess | actionFail
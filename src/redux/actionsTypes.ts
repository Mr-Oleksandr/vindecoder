import {IArticle} from '../types/Article';

export enum ActionType {
    GET_VINCODE_PENDING = 'GET_VINCODE_PENDING',
    GET_VINCODE_SUCCESS = 'GET_VINCODE_SUCCESS',
    GET_VINCODE_FAIL = 'GET_VINCODE_FAIL',
}

interface actionPending {
    type: ActionType.GET_VINCODE_PENDING
}
interface actionSuccess {
    type: ActionType.GET_VINCODE_SUCCESS
    payload: {
        Results: IArticle[];
        SearchCriteria:number;
    }
}
interface actionFail {
    type: ActionType.GET_VINCODE_FAIL
    payload: string
}

export type Action = actionPending | actionSuccess | actionFail

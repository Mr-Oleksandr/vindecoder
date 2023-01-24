import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { State } from './Reducer'
import { useDispatch } from 'react-redux'

type AppDispatch = ThunkDispatch<State, any, AnyAction>

export const actionDispatch = () => {
    const dispatch: AppDispatch = useDispatch()
    return {
        dispatch
    }
}

import React, {useState} from 'react';
import {getArticles} from '../../redux/actions';
import {actionDispatch} from '../../redux/actionsDispatch';

const SearchVinCode = () => {
    const [value, setValue] = useState<string>('')
    const { dispatch } = actionDispatch();

    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
           if(value){
               dispatch(getArticles(value))
           }
        }catch (e) {
            throw new Error('Ups')
        }
    }
    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text' onChange={onHandleChange}/>
            <button type='submit'>Search</button>
        </form>
    );
};

export default SearchVinCode;

import React, { useState } from 'react';
import { getArticles } from '../../redux/actions';
import { actionDispatch } from '../../redux/actionsDispatch';
import './SearchVinCode.css';
import { useForm } from 'react-hook-form';

const SearchVinCode = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const { dispatch } = actionDispatch();

   const onSubmit = async (data: any) => {
      try {
         await dispatch(getArticles(data.text));
      } catch (e) {
         console.log(e);
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className='search-form'>
         <label className='label' htmlFor='text'>
            Enter vin code
         </label>
         <input
            className='form-control'
            id='text'
            placeholder='1FTFW1CT5DFC10312'
            {...register('text', { required: true, maxLength: 17 })}
         />
         {errors.text && errors.text.type === 'required' && (
            <span className='error'>This is required</span>
         )}
         {errors.text && errors.text.type === 'maxLength' && (
            <span className='error'>Max length 17</span>
         )}
         <input className='submit' type='submit' />
      </form>
   );
};

export default SearchVinCode;

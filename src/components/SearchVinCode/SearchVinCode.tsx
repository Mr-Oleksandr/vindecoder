import React from 'react';
import { getArticles, resetError } from '../../redux/actions';
import { actionDispatch } from '../../redux/actionsDispatch';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Button from '@avtopro/button/dist/index'
import TextInput from '@avtopro/text-input/dist/index'
import FormFrame from '@avtopro/form-frame/dist/index';
import Modal from '@avtopro/modal/dist/index'
import './SearchVinCode.css';
import { useForm } from 'react-hook-form';


const SearchVinCode = () => { 
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const { dispatch } = actionDispatch();
   const { loading, error } = useSelector((state: RootState) => state);

   
   const onSubmit = async (data:any) => {
      try {
         await dispatch(getArticles(data.text));
      } catch (e) {
        throw Error();
      }
   };


   if(error){
      return (
         <Modal mode="error" onClose={() => dispatch(resetError())}>
            <div className="modwin__caption">Ошибка соединения</div>
            <div className="modwin__sub-caption">
                Данные формы не отправлены, произошел обрыв соединения.
                Обратитесь к провайдеру вашей сети.
            </div>
         </Modal>
      ) 
   }
      
   return (
      <form onSubmit={handleSubmit(onSubmit)} className='search-form'>
         <label className='label' htmlFor='text'>
            Enter vin code
         </label>
        <FormFrame pending={loading ? true : false}>
        <TextInput
            id="text" 
            className='form-control'
            placeholder='1FTFW1CT5DFC10312'
            {...register('text', { required: true, maxLength: 17 })}
         />
        </FormFrame>
         {errors.text && errors.text.type === 'required' && (
            <span className='error'>This is required</span>
         )}
         {errors.text && errors.text.type === 'maxLength' && (
            <span className='error'>Max length 17</span>
         )}
         <Button type='submit' className='submit' theme="blue" uppercase>Search Vin <i className='btn-icon'></i></Button>
      </form>
   );
};

export default SearchVinCode;

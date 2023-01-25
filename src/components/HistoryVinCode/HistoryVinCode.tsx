import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { actionDispatch } from '../../redux/actionsDispatch';
import { getArticles } from '../../redux/actions';
import './HistoryVinCode.css';

const HistoryVinCode = () => {
   const { vinCode } = useSelector((state: RootState) => state);
   const { dispatch } = actionDispatch();

   const handleCLick = (item: string) => {
      dispatch(getArticles(item.replace('VIN:', '')));
   };

   return (
      <div>
         <h3>History of search results</h3>
         <ul>
            {!!vinCode &&
               vinCode.map((item) => {
                  return (
                     <li key={nanoid()} className='li-item'>
                        {item}
                        <button className='history-vin-btn' onClick={() => handleCLick(item)}>
                           Show
                        </button>
                     </li>
                  );
               })}
         </ul>
      </div>
   );
};

export default HistoryVinCode;

import React from 'react';
import Select,{Option} from '@avtopro/select/dist/index'
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { actionDispatch } from '../../redux/actionsDispatch';
import { getArticles } from '../../redux/actions';
import './HistoryVinCode.css';

const HistoryVinCode = () => {
   const { vinCode } = useSelector((state: RootState) => state);
   const { dispatch } = actionDispatch();

   const handleChange = (item: string) => {
      dispatch(getArticles(item[0].replace('VIN:', '')));
   };


   return (
      <div>
         <h3>History of search results</h3>
         <Select onChange={(_: any, newValue: string) => handleChange(newValue)} defaultValue={vinCode[0]} placeholder="Select vin code" disabled={vinCode.length ? false : true }>
            {!!vinCode &&
               vinCode.map((item) => {
                  return (
                     <Option key={nanoid()} value={item} >
                        {item}
                     </Option>
                  );
               })}
         </Select>
      </div>
   );
};

export default HistoryVinCode;

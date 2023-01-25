import React from 'react';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import VehicleInfo from '../VehicleInfo/VehicleInfo';
import Loader from '../../ui/Loader/Loader';
import './VehicleCodeList.css';

const VehicleCodeList = () => {
   const { articles, loading } = useSelector((state: RootState) => state);

   if (!articles?.length) {
      return <div>enter vin code</div>;
   }

   if (loading) {
      return <Loader />;
   }

   return (
      <div className='vehicle-list-container'>
         <ul className='vehicle-list-info'>
            {articles
               .filter((item: any) => item.Value)
               .map((item: any) => {
                  return <VehicleInfo {...item} key={item.VariableId} />;
               })}
         </ul>
      </div>
   );
};

export default VehicleCodeList;

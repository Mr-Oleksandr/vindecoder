import React from 'react';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import VehicleInfo from '../VehicleInfo/VehicleInfo';
import RobotPreloader from '@avtopro/preloader/dist/index';
import './VehicleCodeList.css';

const VehicleCodeList = () => {
   const { articles, loading } = useSelector((state: RootState) => state);
   console.log(loading)
   if (!articles?.length) {
      return <div>enter vin code</div>;
   }

   if (loading) {
      return <RobotPreloader />;
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

import React from 'react';
import VehicleCodeList from '../../components/VehicleCodeList/VehicleCodeList';
import SearchVinCode from '../../components/SearchVinCode/SearchVinCode';
import HistoryVinCode from '../../components/HistoryVinCode/HistoryVinCode';

const DecodeVin = () => {
   return (
      <div className='decode-page'>
         <SearchVinCode />
         <HistoryVinCode />
         <VehicleCodeList />
      </div>
   );
};

export default DecodeVin;

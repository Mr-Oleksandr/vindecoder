import React, { FC } from 'react';
import './Vehicle.css';
interface VehicleInfoProps {
   Value: string;
   Variable: string;
   VariableId: number;
}

const VehicleInfo: FC<VehicleInfoProps> = ({ Value, Variable }) => {
   return (
      <article className='vehicle-info'>
         <h2>{Variable}</h2>
         <p>{Value}</p>
      </article>
   );
};

export default VehicleInfo;

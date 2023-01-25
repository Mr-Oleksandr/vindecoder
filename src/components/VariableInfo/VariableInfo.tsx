import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import { useFetchArticleById } from '../../hooks/useFetchVariable';
import Loader from '../../ui/Loader/Loader';
import './VariableInfo.css';

interface VariableInfoProps {
   id: string;
}

const VariableInfo: FC<VariableInfoProps> = ({ id }) => {
   const { variable, loading, error } = useFetchArticleById(id);

   if (loading && !error) {
      return <Loader />;
   }
   if (!variable?.length) {
      return <h3>No Information</h3>;
   }

   return (
      <div className='variable-info-container'>
         <table>
            <thead>
               <tr>
                  <th>ElementName</th>
                  <th>Name</th>
               </tr>
            </thead>
            <tbody>
               {variable.map((item) => {
                  return (
                     <tr key={nanoid()}>
                        <td>{item.ElementName}</td>
                        <td>{item.Name}</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
};

export default VariableInfo;

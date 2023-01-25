import React from 'react';
import VariableInfo from '../../components/VariableInfo/VariableInfo';
import { useParams } from 'react-router-dom';

const VariablePage = () => {
   const { id } = useParams() as any;

   return (
      <div>
         <VariableInfo id={id} />
      </div>
   );
};

export default VariablePage;

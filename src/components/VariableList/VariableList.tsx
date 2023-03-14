import React from 'react';
import { useFetchArticleById } from '../../hooks/useFetchVariables';
import { useNavigate } from 'react-router-dom';
import RobotPreloader from '@avtopro/preloader/dist/index';
import './VariableList.css';

const VariableList = () => {
   const { variables, loading, error } = useFetchArticleById();
   const navigate = useNavigate();

   if (loading && !error) {
      return <RobotPreloader/>;
   }
   return (
      <div className='variable-content'>
         {variables?.Results?.map((item) => {
            return (
               <article
                  key={item.ID}
                  onClick={() => navigate(`/vindecoder/variables/${item.ID}`)}
                  className='variable'
               >
                  <h2>{item.Name}</h2>
                  <h3>{item.GroupName}</h3>
                  <p dangerouslySetInnerHTML={{ __html: `${item.Description}` }}></p>
               </article>
            );
         })}
      </div>
   );
};

export default VariableList;

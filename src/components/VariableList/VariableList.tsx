import React from 'react';
import { useFetchArticleById } from '../../hooks/useFetchVariables';
import { Link } from 'react-router-dom';
import RobotPreloader from '@avtopro/preloader/dist/index';
import './VariableList.css';

const VariableList = () => {
   const { variables, loading, error } = useFetchArticleById();

   if (loading && !error) {
      return <RobotPreloader/>;
   }
   return (
      <div className='variable-content'>
         {variables?.Results?.map((item) => {
            return (
              <article key={item.ID}>
                <Link
                  key={item.ID}
                  to={`/variables/${item.ID}`}
                  className='variable'
               >
                  <h2>{item.Name}</h2>
               </Link>
               <h3>{item.GroupName}</h3>
                  <p dangerouslySetInnerHTML={{ __html: `${item.Description}` }}></p>
              </article>
            );
         })}
      </div>
   );
};

export default VariableList;

import React from 'react';
import { useFetchArticleById } from '../../hooks/useFetchVariables';
import { useNavigate } from 'react-router-dom';
import Loader from '../../ui/Loader/Loader';
import './VariableList.css';

const VariableList = () => {
   const { variables, loading, error } = useFetchArticleById();
   const navigate = useNavigate();

   if (loading) {
      return <Loader />;
   }
   return (
      <div className='variable-content'>
         {variables?.Results?.map((item) => {
            return (
               <article
                  key={item.ID}
                  onClick={() => navigate(`/variables/${item.ID}`)}
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

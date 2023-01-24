import React from 'react';
import {useFetchArticleById} from '../../hooks/useFetchVariables';

const VariableList = () => {
    const {variables, loading, error} = useFetchArticleById()

    return (
        <div>
            {variables?.map((item:any) => {
                return (
                    <article key={item.ID}>
                        <h2>{item.Name}</h2>
                        <h3>{item.GroupName}</h3>
                        <p dangerouslySetInnerHTML={{__html:`${item.Description}`}}></p>
                    </article>
                )
            })}
        </div>
    );
};

export default VariableList;

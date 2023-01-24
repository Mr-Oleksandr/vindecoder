import React from 'react';
import { RootState } from '../../store/store';
import {useSelector} from 'react-redux';
import VehicleInfo from '../VehicleInfo/VehicleInfo';

const VehicleCodeList = () => {
    const { articles, loading } = useSelector((state: RootState) => state);

    if(!articles.length){
        return <div>enter vin code</div>
    }

    if(loading){
        return <div>Loading...</div>
    }

    return (
        <div>
            {articles.filter((item:any) => item.Value).map((item:any) => {
                return (
                    <VehicleInfo {...item} key={item.VariableId}/>
                )
            })}
        </div>
    );
};

export default VehicleCodeList;

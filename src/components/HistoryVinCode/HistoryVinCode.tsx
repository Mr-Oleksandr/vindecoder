import React, {useEffect, useState} from 'react';
import { nanoid } from 'nanoid'
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';


const HistoryVinCode = () => {

    const {vinCode} = useSelector((state: RootState) => state);

    return (
        <div>
            {vinCode.map((item) => {
                return (
                    <div key={nanoid()}>{item}</div>
                )
            })}
        </div>
    );
};

export default HistoryVinCode;

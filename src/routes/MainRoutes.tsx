import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const VariablesPage = lazy(() => import('../pages/VariablesPage/VariablesPage'));
const DecodeVinPage = lazy(() => import('../pages/DecodeVinPage/DecodeVin'));

const MainRoutes = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path='/' element={<DecodeVinPage />} />
                    <Route path='/variables' element={<VariablesPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default MainRoutes;

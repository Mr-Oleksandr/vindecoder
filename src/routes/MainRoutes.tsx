import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import RobotPreloader from '@avtopro/preloader/dist/index';
const VariablesPage = lazy(() => import('../pages/VariablesPage/VariablesPage'));
const DecodeVinPage = lazy(() => import('../pages/DecodeVinPage/DecodeVin'));
const VariablePage = lazy(() => import('../pages/VariablePage/VariablePage'));

const MainRoutes = () => {
   return (
      <div>
         <Suspense fallback={<RobotPreloader fixed/>}>
            <Routes>
               <Route path='/vindecoder' element={<DecodeVinPage />} />
               <Route path='/vindecoder/variables' element={<VariablesPage />} />
               <Route path='/vindecoder/variables/:id' element={<VariablePage />} />
            </Routes>
         </Suspense>
      </div>
   );
};

export default MainRoutes;

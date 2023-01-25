import React from 'react';
import MainRoutes from '../routes/MainRoutes';
import Header from '../ui/Header/Header';
import './App.css';
const App = () => {
   return (
      <div className='container'>
         <Header />
         <MainRoutes />
      </div>
   );
};

export default App;

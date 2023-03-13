import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import './index.css';
import '@avtopro/button/dist/style.css';
import '@avtopro/select/dist/style.css';
import '@avtopro/preloader/dist/style.css';
import '@avtopro/text-input/dist/style.css';
import '@avtopro/form-frame/dist/style.css';
import '@avtopro/modal/dist/style.css';
import '@avtopro/tooltip/dist/style.css';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </PersistGate>
   </Provider>,
);

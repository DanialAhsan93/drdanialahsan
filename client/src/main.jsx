import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/Store.js';
import ThemeProvider from './components/ThemeProvider.jsx';
import { PersistGate } from 'redux-persist/integration/react';


createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      {/* <StrictMode> */}
        <ThemeProvider>
          <App />
        </ThemeProvider>
      {/* </StrictMode> */}
    </Provider>
  </PersistGate>


)

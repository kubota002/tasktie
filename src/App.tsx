
import './App.css';
import AppRoutes from './components/AppRoutes';
import Header from './components/Header';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

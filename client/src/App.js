import React from 'react';
import Register from './pages/Register'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Register />
      </div>
    </Provider>
  );
}

export default App;

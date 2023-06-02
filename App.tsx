import React from 'react';
import AppNavigation from './src/navigation/AppNavigation/AppNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;

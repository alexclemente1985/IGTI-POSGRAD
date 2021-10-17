import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store/';
import {AppRoutes} from './routes/app.routes';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  </Provider>
);

export default App;

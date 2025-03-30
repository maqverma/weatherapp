import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@store/index';
import {Home} from '@screens/index';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;

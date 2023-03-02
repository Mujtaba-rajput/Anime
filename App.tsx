import 'react-native-gesture-handler';
import React from 'react';

import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import Store from './src/redux/Store';
import {Provider} from 'react-redux';
import Navigation from './src/NavigationContainer/Navigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;

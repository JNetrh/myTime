import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'emotion-theming';

import theme from './theme';
import Layout from './components/Layout/Layout';
import { configureClient } from './apolloClient';

const apolloClient = configureClient();

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;

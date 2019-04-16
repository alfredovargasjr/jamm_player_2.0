import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { NotificationContainer } from 'react-notifications';
import NavBar from './navigation/NavBar';
import Routes from './navigation/Routes';
const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjgww71fd4nfp018700vpvkmi',
});

const App: React.FunctionComponent = () => (
  <ApolloProvider client={client}>
    <NavBar />
    <Routes />
    <NotificationContainer />
  </ApolloProvider>
);

export default App;

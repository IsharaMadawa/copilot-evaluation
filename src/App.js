import React from 'react';
import './App.scss';
import AddAssignee from './components/add-assignee/components/add-assignee';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

function App() {
  const client = new ApolloClient({
    uri: 'https://localhost:44356/BUS.APIs.GraphQLServer.P3.Kvalitet.InternalApp',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        <AddAssignee />
      </div>
    </ApolloProvider>
  );
}

export default App;

import React from "react";
import BookList from './components/BookList'

import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'
import {ApolloProvider} from '@apollo/client'
import {render} from "@testing-library/react";

//Apollo client setup
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/graphql"
  })
})

function App() {
  return (
    <ApolloProvider client = {client} >
    <div className="App" id="main">
      <header className="App-header">GraphQL Books</header> 
      <BookList></BookList>
    </div>
    </ApolloProvider>
  );
}

export default App;

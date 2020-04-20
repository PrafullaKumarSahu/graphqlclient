import React from "react";
import BookList from './components/BookList'

function App() {
  return (
    <div className="App" id="main">
      <header className="App-header">GraphQL Books</header> 
      <BookList></BookList>
    </div>
  );
}

export default App;

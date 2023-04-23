import React from "react";
import blogData from "../data/blog";
import Header from "./Header";

console.log(blogData);

const App = (props) => {
  
  return (
    <div className="App">
      <Header name = { "Underreacted" } />
    </div>
  );
}

export default App;

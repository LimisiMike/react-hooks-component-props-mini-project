import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

console.log(blogData);

const App = (props) => {
  
  return (
    <div className="App">
      <Header name = { "Underreacted" } />
      {/* <About image = { logo } /> */}
      <About about = { "A blog about learning React" } />
    </div>
  );
}

export default App;

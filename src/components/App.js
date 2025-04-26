import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div id="home">
          <Home username="Liza" city="New York" color="firebrick" />
        </div>
        <div id="about">
          <About
            bio="I made this"
            links={{
              github: "https://github.com/liza",
              linkedin: "https://www.linkedin.com/in/liza/",
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;

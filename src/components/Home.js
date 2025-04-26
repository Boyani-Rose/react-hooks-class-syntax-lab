import React from "react";

class Home extends React.Component {
  render() {
    const { username, city, color } = this.props;
    return (
      <h1 style={{ color }}>
        {username} is a Web Developer from {city}
      </h1>
    );
  }
}

export default Home;

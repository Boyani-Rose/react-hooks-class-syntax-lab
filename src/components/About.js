import React from "react";
import Links from "./Links";

class About extends React.Component {
  render() {
    return (
      <div>
        {this.props.bio && <p>{this.props.bio}</p>}
        <Links
          github={this.props.links.github}
          linkedin={this.props.links.linkedin}
        />
      </div>
    );
  }
}

export default About;

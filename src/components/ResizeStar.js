import React, { Component } from "react";
import star from "../star.png";

class ResizeStar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 300,
      height: 300,
    };
  }

  growStar = () => {
    this.setState((prevState) => ({
      width: prevState.width + 2,
      height: prevState.height + 2,
    }));
  };

  render() {
    return (
      <div>
        <img
          src={star}
          width={this.state.width}
          height={this.state.height}
          onClick={this.growStar}
          alt="Resize Star"
        />
      </div>
    );
  }
}

export default ResizeStar;

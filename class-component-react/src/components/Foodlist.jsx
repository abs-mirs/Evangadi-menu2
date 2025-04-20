import { Component } from "react";

class Foodlist extends Component {
  render() {
    return (
      <div className="foods-container">
        <div className="single-food">
          <div className="img">
            <img src={this.props.img} alt={this.props.title} />
          </div>
          <div className="title-price">
            <h3>{this.props.title}</h3>
            <p>{this.props.price}</p>
          </div>
          <div className="food-desc">{this.props.desc}</div>
        </div>
      </div>
    );
  }
}

export default Foodlist;

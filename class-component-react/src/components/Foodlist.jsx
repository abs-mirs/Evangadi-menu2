import { Component } from "react";

class Foodlist extends Component {
  render() {
    const { img, title, price, desc } = this.props.food;

    return (
      <div className="single-food">
        <div className="img">
          <img src={img} alt={title} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div className="food-desc">{desc.substring(0, 200)}...</div>
      </div>
    );
  }
}

export default Foodlist;

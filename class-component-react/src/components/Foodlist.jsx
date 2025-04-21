import { Component } from "react";

class Foodlist extends Component {
  render() {
    const { img, title, price, desc } = this.props; 

    return (
      <div className="single-food">
        <div className="img">
          <img src={img} alt={title} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div className="food-desc">{desc}</div>
      </div>
    );
  }
}

export default Foodlist;

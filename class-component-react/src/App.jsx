// App.jsx
import { Component } from "react";
import Header from "./components/Header";
import Foodlist from "./components/Foodlist";
import menu from "./assets/data";

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="foods-container">
          {menu.map((food) => (
            <Foodlist
              key={food.id}
              img={food.img}
              title={food.title}
              price={food.price}
              desc={food.desc}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;

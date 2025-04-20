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

        {/* Wrap all Foodlist items in one .foods-container */}
        <div className="foods-container">
          {menu.map((element) => (
            <Foodlist
              key={element.id}
              img={element.img}
              title={element.title}
              price={element.price}
              desc={element.desc}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;

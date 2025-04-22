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
          {menu.map((item) => (
            <Foodlist key={item.id} food={item} />
          ))}
        </div>
      </>
    );
  }
}

export default App;

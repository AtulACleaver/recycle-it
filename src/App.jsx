import React, { Component } from "react";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";
import { items } from "./Items.jsx";
import Scroll from "./Components/Scroll";
import "./css/App.css";
import Navbar from "./Components/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: items,
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ items: items });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { items, searchfield } = this.state;
    const filteredItems = this.state.items.filter((items) => {
      return items.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (items.length === 0) {
      return (
        <div className="app-container">
          <Navbar />
          <div className="loading-screen">
            <h1 className="loading"> Loading... </h1>
          </div>
        </div>
      );
    } else {
      return (
        <div className="app-container">
          <Navbar />
          <div className="item-container">
            <h1 className="item-heading"> Items you want to Recycle </h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <CardList items={filteredItems} />
            </Scroll>
          </div>
        </div>
      );
    }
  }
}

export default App;

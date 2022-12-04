import React from "react";
import Card from "../Components/Card.jsx";
import "../css/Card.css";

const CardList = ({ items }) => {
  const cardComponent = items.map((user, index) => {
    return (
      <Card
        key={index}
        id={items[index].id}
        name={items[index].name}
        tags={items[index].tag}
        image={items[index].image}
      />
    );
  });
  return <div className="card-list">{cardComponent}</div>;
};

export default CardList;

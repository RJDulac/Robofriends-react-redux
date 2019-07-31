import React from "react";

import Card from "./card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, index) => (
        <Card
          id={robots[index].id}
          name={robots[index].name}
          email={robots[index].email}
          key={index}
        />
      ))}
    </div>
  );
};

export default CardList;

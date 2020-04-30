import React from "react";

const Question = props => {
  const { currentPerson, guestPairs } = props;
  return (
    <div>
      <p>I was with {guestPairs[currentPerson]}</p>
    </div>
  );
};

export default Question;

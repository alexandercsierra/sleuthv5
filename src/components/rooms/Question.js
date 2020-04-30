import React from "react";
import Questioning from "./Questioning";

const Question = props => {
  const { currentPerson, guestPairs, isQuestioning, setIsQuestioning } = props;
  return (
    <div>
      <button
        onClick={e => {
          e.preventDefault();
          console.log("questioned", currentPerson);
          setIsQuestioning(true);
        }}
      >
        Question
      </button>
      {isQuestioning && (
        <Questioning currentPerson={currentPerson} guestPairs={guestPairs} />
      )}
    </div>
  );
};

export default Question;

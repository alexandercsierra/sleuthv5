import React from "react";

import Questioning from "./Questioning";

const Question = ({ currentPerson, isQuestioning, setIsQuestioning }) => {

  
  return (
    <div>
      <button
        onClick={e => {
          e.preventDefault();
          setIsQuestioning(true);
        }}
      >
        Question
      </button>
      {isQuestioning && (
        <Questioning currentPerson={currentPerson} />
      )}
    </div>
  );
};

export default Question;

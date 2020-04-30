import React from "react";
import Examining from "./Examining";

const ExamineObj = props => {
  const { murderWeapon, currentWeapon, isExamining, setIsExamining } = props;
  return (
    <div>
      <button
        onClick={e => {
          e.preventDefault();
          setIsExamining(true);
        }}
      >{`Examine the ${currentWeapon}`}</button>
      {isExamining && (
        <Examining murderWeapon={murderWeapon} currentWeapon={currentWeapon} />
      )}
    </div>
  );
};

export default ExamineObj;

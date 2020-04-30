import React, {useContext} from "react";
import {MurderContext} from '../../contexts/MurderContext'

const Question = ({ currentPerson}) => {
  
  const {guestPairs} = useContext(MurderContext);

  return (
    <div>
      <p>I was with {guestPairs[currentPerson]}</p>
    </div>
  );
};

export default Question;

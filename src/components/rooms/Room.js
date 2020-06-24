import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Question from "./Question";
import ExamineObj from "./ExamineObj";

const Room = ({weaponsRooms, peopleRooms, gameCounter, murderRoom}) => {
   
  const { roomName } = useParams();
  const [currentWeapon, setCurrentWeapon] = useState("");
  const [currentPerson, setCurrentPerson] = useState("");
  const [isQuestioning, setIsQuestioning] = useState(false);
  const [isExamining, setIsExamining] = useState(false);
  const [lookAtFloor, setLookAtFloor] = useState(false);

  useEffect(() => {
    setCurrentWeapon(weaponsRooms[roomName]);
    setCurrentPerson(peopleRooms[roomName]);
    setLookAtFloor(false);
  }, [roomName]);

  let body = document.querySelector("body");

  switch (roomName) {
    case "Lounge":
      body.style.background = "blue";
    default:
      body.style.background = "white";
  }

  const checkRoom = () => {
    return roomName === murderRoom ? "There's blood on the floor!" : "Nothing to see here."
  }
  //there is a weapon and a person
  if (currentWeapon !== "") {
    if (currentPerson !== "") {
      return (
        <div>
          <h2>{`You have entered the ${roomName}`}</h2>
          <p>{`There is a ${currentWeapon} lying on the table.`}</p>
          <p>{`${currentPerson} is lurking in the corner.`}</p>
          <Question
            currentPerson={peopleRooms[roomName]}
            isQuestioning={isQuestioning}
            setIsQuestioning={setIsQuestioning}
          />
          <ExamineObj
            currentWeapon={weaponsRooms[roomName]}
            isExamining={isExamining}
            setIsExamining={setIsExamining}
          />
          {gameCounter > 9 && <button onClick={()=>setLookAtFloor(true)}>examine the floor</button>}
          {lookAtFloor && <p>{checkRoom()}</p>}
        </div>
      );
      //there is a weapon, but no person
    } else {
      return (
        <div>
          <h2>{`You have entered the ${roomName}`}</h2>
          <p>{`There is a ${currentWeapon} lying on the table.`}</p>
          <p>{`There is no one here.`}</p>
          <ExamineObj
            currentWeapon={weaponsRooms[roomName]}
            isExamining={isExamining}
            setIsExamining={setIsExamining}
          />
        </div>
      );
    }
    //there is no weapon, but there is a person
  } else {
    if (currentPerson !== "") {
      return (
        <div>
          <h2>{`You have entered the ${roomName}`}</h2>
          <p>{`There is nothing lying on the table.`}</p>
          <p>{`${currentPerson} is lurking in the corner.`}</p>
          <Question
            currentPerson={peopleRooms[roomName]}
            isQuestioning={isQuestioning}
            setIsQuestioning={setIsQuestioning}
          />
          {gameCounter > 9 && <button onClick={()=>setLookAtFloor(true)}>examine the floor</button>}
          {lookAtFloor && <p>{checkRoom()}</p>}
        </div>
      );
      //there is no weapon and no person
    } else if (currentPerson === "") {
      return (
        <div>
          <h2>{`You have entered the ${roomName}`}</h2>
          <p>{`There is nothing lying on the table.`}</p>
          <p>{`There is no one here.`}</p>
        </div>
      );
    }
  }
};

export default Room;

//describe room
//be able to examine object(s)?
//need to know if there's a guest in there
//if there is, need to be able to question them
//if they are looking at the floor, have option to ex floor

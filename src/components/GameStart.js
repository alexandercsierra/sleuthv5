import React, { useEffect } from "react";
import RoomSelect from "./RoomSelect";

const GameStart = props => {
  const {
    setIsFull,
    deadGuest,
    setGameStart,
  } = props;


  useEffect(() => {
    setIsFull(false);
    setGameStart(true);
  }, []);
  return (
    <div>
      <h1>{`You stand before the mansion of: ${deadGuest}`} </h1>
      <RoomSelect/>
    </div>
  );
};

export default GameStart;

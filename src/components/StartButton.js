import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../styling/styled-components";
import {chooseMurder} from '../helperFunctions'

const StartButton = props => {
  const {
    gl,
    setMurderer,
    setDeadGuest,
    setGuestList,
    rooms,
    weapons,
    setMurderRoom,
    setMurderWeapon,
    setWeaponsRooms,
    setPeopleRooms,
    setGuestPairs
  } = props;

  

  return (
    <Link to="/gamestart">
      <Button onClick={()=>chooseMurder(gl,
    setMurderer,
    setDeadGuest,
    setGuestList,
    rooms,
    weapons,
    setMurderRoom,
    setMurderWeapon,
    setWeaponsRooms,
    setPeopleRooms,
    setGuestPairs)}>Start Game</Button>
    </Link>
  );
};

export default StartButton;

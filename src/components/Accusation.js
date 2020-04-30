import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Accusation = props => {
  const {
    guestList,
    rooms,
    weapons,
    setGameStart,
    murderWeapon,
    murderer,
    murderRoom
  } = props;

  //state of accusation, defaults to first options
  const [accState, setAccState] = useState({
    who: guestList[0],
    what: weapons[0],
    where: rooms[0]
  });

  //keeps track of whether form has submitted
  const [isAccusing, setIsAccusing] = useState(false);

  const win = "you won!";
  const lose = "you lost...";

  const [endMessage, setEndMessage] = useState(lose);

  //correct answers
  const theMurder = {
    who: murderer,
    what: murderWeapon,
    where: murderRoom
  };

  function handleChangeWho(e) {
    // setWhoState(e.target.value);
    // console.log("who", whoState);
    setAccState({
      ...accState,
      who: e.target.value
    });
  }

  function handleChangeWhat(e) {
    // setWhatState(e.target.value);
    // console.log("what", whatState);
    setAccState({ ...accState, what: e.target.value });
  }

  function handleChangeWhere(e) {
    // setWhereState(e.target.value);
    // console.log("where", whereState);
    setAccState({ ...accState, where: e.target.value });
  }

  //compares values of two objects
  function compare(obj1, obj2) {
    let values1 = Object.values(obj1);
    let values2 = Object.values(obj2);
    let count = 0;
    values1.forEach((thing, i) => {
      if (thing === values2[i]) {
        count++;
      }
    });
    if (count === 3) {
      return true;
    } else {
      return false;
    }
  }

  //hides nav, and selects, shows message
  function onSubmit(e) {
    e.preventDefault();
    setIsAccusing(true);
    setGameStart(false);
    console.log("accState", accState);
    console.log("murder", theMurder);
    if (compare(accState, theMurder)) {
      setEndMessage(win);
    } else {
      setEndMessage(lose);
    }
  }

  return (
    <div>
      Accuse
      {isAccusing === false && (
        <form onSubmit={onSubmit}>
          <label htmlFor="who">Who dunnit?</label>
          <select id="who" name="who" onChange={handleChangeWho}>
            {guestList.map(person => {
              return <option value={person}>{person}</option>;
            })}
          </select>
          <label htmlFor="what">With what?</label>
          <select id="what" name="what" onChange={handleChangeWhat}>
            {weapons.map(weapon => {
              return <option value={weapon}>{weapon}</option>;
            })}
          </select>
          <label htmlFor="where">Where?</label>
          <select id="where" name="where" onChange={handleChangeWhere}>
            {rooms.map(room => {
              return <option value={room}>{room}</option>;
            })}
          </select>
          {/* <Link to="/end"> */}
          <button>Submit</button>
          {/* </Link> */}
        </form>
      )}
      {isAccusing && <p>{endMessage}</p>}
    </div>
  );
};

export default Accusation;

import React, { useState, useEffect, useContext } from "react";
import {MurderContext} from '../contexts/MurderContext'
import { Link } from "react-router-dom";

const RoomSelect = () => {
  const {
    rooms,
    peopleRooms,
    setPeopleRooms,
    setGameCounter,
    gameCounter
  } = useContext(MurderContext)
  
  const [roomState, setRoomState] = useState("Lounge");

  function handleChange(e) {
    setRoomState(e.target.value);
    console.log(roomState);
    console.log("new list of peeps", peopleRooms);
  }

  function randomize(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let indexArr = [];
    console.log(randomIndex);
    while (indexArr.length < arr.length) {
      if (indexArr.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * arr.length);
      } else {
        indexArr.push(randomIndex);
      }
    }
    let newArr = [];
    indexArr.forEach(index => {
      newArr.push(arr[index]);
    });
    return newArr;
  }

  function randomizeGuests() {
    //will take peopleRooms and randomly assign different people to same room list.
    let people = Object.values(peopleRooms);
    let roomsList = Object.keys(peopleRooms);
    let randomPeople = randomize(people);
    let obj = {};
    for (let i = 0; i < roomsList.length; i++) {
      obj[roomsList[i]] = randomPeople[i];
    }

    console.log("from randomizeGuests", obj);
    return obj;
  }

  useEffect(() => {
    let list = randomizeGuests();
    setPeopleRooms(list);
  }, []);

  return (
    <div>
      <form>
        <label htmlFor="rooms">Select a Room</label>
        <select name="rooms" id="rooms" onChange={handleChange}>
          {rooms.map(room => {
            return (
              <option key={room} value={room}>
                {room}
              </option>
            );
          })}
        </select>
      </form>
      <Link
        to={`/rooms/${roomState}`}
        onClick={() => {
          //increment game counter
          setGameCounter(gameCounter + 1);
          console.log(gameCounter);
        }}
      >
        Go
      </Link>
    </div>
  );
};

export default RoomSelect;

import React, { useState } from "react";
import {MurderContext} from './contexts/MurderContext'
import { Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Room from "./components/rooms/Room";
import AddGuests from "./components/AddGuests";
import StartButton from "./components/StartButton";
import GameStart from "./components/GameStart";
import Rooms from "./components/Rooms";
import GuestList from "./components/GuestList";
import Accusation from "./components/Accusation";
import End from "./components/End";

function App() {
  const roomsList = [
    "Lounge",
    "Dining Room",
    "Kitchen",
    "Ballroom",
    "Conservatory",
    "Billiard Room",
    "Library",
    "Study",
    "Hall"
  ];
  const weaponsList = [
    "Knife",
    "Candle Stick",
    "Wrench",
    "Lead Pipe",
    "Rope",
    "Revolver",
    "",
    "",
    ""
  ];

  //total guest list provided by user
  const [gl, setGl] = useState([]);
  //determines whether or not there are 7 total guests
  const [isFull, setIsFull] = useState(false);
  //determines whether or not game has started to show navbar
  const [gameStart, setGameStart] = useState(false);
  //holds the name of the murderer
  const [murderer, setMurderer] = useState("");
  //holds the name of the murdered guest
  const [deadGuest, setDeadGuest] = useState("");
  //guest list minus the dead person
  const [guestList, setGuestList] = useState([]);
  //sets state of rooms to the list in roomsList
  const [rooms] = useState(roomsList);
  const [weapons] = useState(weaponsList);
  //holds the name of the room where murder took place
  const [murderRoom, setMurderRoom] = useState("");
  //holds the name of the murder weapon
  const [murderWeapon, setMurderWeapon] = useState("");
  //sets object of room weapon key value pairs
  const [weaponsRooms, setWeaponsRooms] = useState("");
  //sets object of people room key value pairs
  const [peopleRooms, setPeopleRooms] = useState("");
  //sets object of guest pairs
  const [guestPairs, setGuestPairs] = useState("");
  //counts number of rooms entered to allow for early game over
  const [gameCounter, setGameCounter] = useState(0);

  return (
    <div className="App">
        <MurderContext.Provider value={{gl, setGl, isFull, setIsFull, gameStart, setGameStart, murderer, setMurderer, deadGuest, setDeadGuest, guestList, setGuestList, rooms, weapons, murderRoom, setMurderRoom, murderWeapon, setMurderWeapon, weaponsRooms, setWeaponsRooms, peopleRooms, setPeopleRooms, guestPairs, setGuestPairs, gameCounter, setGameCounter}}>
  
      {gameStart && <NavBar setGl={setGl} />}
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/addguests">
        <AddGuests gl={gl} setGl={setGl} setIsFull={setIsFull} />
      </Route>
      <Route path="/gamestart">
        <GameStart
          setIsFull={setIsFull}
          deadGuest={deadGuest}
          setGameStart={setGameStart}
        />
      </Route>
      <Route path="/guestlist">
        <GuestList guestList={guestList} />
      </Route>
      <Route path="/accusation">
        <Accusation
          guestList={guestList}
          rooms={rooms}
          weapons={weapons}
          setGameStart={setGameStart}
          murderWeapon={murderWeapon}
          murderer={murderer}
          murderRoom={murderRoom}
        />
      </Route>
      <Route path="/end">
        <End />
      </Route>
      <Route exact path="/rooms">
        <Rooms
          rooms={rooms}
          peopleRooms={peopleRooms}
          setPeopleRooms={setPeopleRooms}
          gameCounter={gameCounter}
          setGameCounter={setGameCounter}
        />
      </Route>
      <Route path="/rooms/:roomName">
        <Room
          weaponsRooms={weaponsRooms}
          peopleRooms={peopleRooms}
          gameCounter={gameCounter}
        />
      </Route>

      {isFull && (
        <StartButton
          gl={gl}
          setMurderer={setMurderer}
          murderer={murderer}
          deadGuest={deadGuest}
          setDeadGuest={setDeadGuest}
          guestList={guestList}
          setGuestList={setGuestList}
          rooms={rooms}
          weapons={weapons}
          setMurderRoom={setMurderRoom}
          setMurderWeapon={setMurderWeapon}
          setWeaponsRooms={setWeaponsRooms}
          weaponsRooms={weaponsRooms}
          setPeopleRooms={setPeopleRooms}
          murderRoom={murderRoom}
          guestPairs={guestPairs}
          setGuestPairs={setGuestPairs}
        />
      )}
      <div>
      <h2>The murderer is: {murderer}</h2>
      </div>
      </MurderContext.Provider>
    </div>
    
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../styling/styled-components";

const StartButton = props => {
  const {
    gl,
    setMurderer,
    murderer,
    deadGuest,
    setDeadGuest,
    guestList,
    setGuestList,
    rooms,
    weapons,
    setMurderRoom,
    setMurderWeapon,
    setWeaponsRooms,
    setPeopleRooms,
    weaponsRooms,
    murderRoom,
    guestPairs,
    setGuestPairs
  } = props;

  function chooseMurder() {
    //choose random guest to die
    let randoNum = Math.floor(Math.random() * 7);
    console.log("index", randoNum);
    let died = gl[randoNum];
    setDeadGuest(died);

    //remove dead person from the guest list
    let newGl = gl.filter(person => {
      return person !== died;
    });
    setGuestList(newGl);

    //choose random murderer from new guest list
    let randoNum2 = Math.floor(Math.random() * 6);
    setMurderer(newGl[randoNum2]);

    //choose random room to be murder room
    // let randoNum3 = Math.floor(Math.random() * rooms.length);
    // setMurderRoom(rooms[randoNum3]);

    // choose random weapon to be the murder weapon can't do because needs to be in the room
    // let randoNum4 = Math.floor(Math.random() * weapons.length);
    // setMurderWeapon(weapons[randoNum4]);

    //function to randomize an array
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

    let randomWeapons = randomize(weapons);
    let randomRooms = randomize(rooms);
    let weaponAssignments = {};

    function assignWeapons() {
      randomRooms.forEach((room, i) => {
        weaponAssignments[room] = randomWeapons[i];
      });
      setWeaponsRooms(weaponAssignments);
    }

    assignWeapons();

    //makes sure that the murder room is a room that contains a weapon, and that the weapon is the one that actually exists in that room
    function assignDetails() {
      // let randoNum = Math.floor(Math.random() * rooms.length);
      let weaponsList = Object.values(weaponAssignments);
      let actualWeapons = weaponsList.filter(weapon => weapon !== "");
      setMurderWeapon(actualWeapons[0]);
      let roomsList = Object.keys(weaponAssignments);
      let actualRooms = roomsList.filter(
        room => weaponAssignments[room] !== ""
      );
      setMurderRoom(actualRooms[0]);
    }

    assignDetails();

    //randomize living guests

    function assignPeople() {
      //add in blanks to guest list to match the number of rooms
      let peopleCopy = [...newGl];
      let length = rooms.length - peopleCopy.length;
      for (let i = 0; i < length; i++) {
        peopleCopy.push("");
      }

      //randomize new list with blanks
      let randomPeople = randomize(peopleCopy);
      let peopleAssignments = {};
      randomRooms.forEach((room, i) => {
        peopleAssignments[room] = randomPeople[i];
      });
      setPeopleRooms(peopleAssignments);
    }
    assignPeople();

    //pair up guests
    function guestPairings() {
      let peopleCopy = [...newGl];
      let innocents = peopleCopy.filter(
        person => person !== peopleCopy[randoNum2]
      );
      let randos = randomize(innocents);
      let solo = randos.pop();
      console.log("solo", solo, "randos", randos);
      let obj = {};
      let randomNum = Math.floor(Math.random() * randos.length);
      obj[randos[0]] = randos[1];
      obj[randos[2]] = randos[3];
      obj[randos[1]] = randos[0];
      obj[randos[3]] = randos[2];
      obj[solo] = "alone";
      obj[newGl[randoNum2]] = randos[randomNum];
      console.log("the pairs", obj);

      setGuestPairs(obj);
    }

    guestPairings();
  }

  return (
    <Link to="/gamestart">
      <Button onClick={chooseMurder}>Start Game</Button>
    </Link>
  );
};

export default StartButton;

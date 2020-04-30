import React, {useState, useContext} from "react";
import {MurderContext} from '../../contexts/MurderContext'
const Examining = ({currentWeapon}) => {

  const {murderWeapon} = useContext(MurderContext);
 
  const [isMurderWeapon, setIsMurderWeapon] = useState("");



  if (currentWeapon !== murderWeapon) {
    return (
      <div>
        <p>The {currentWeapon} is not the murder weapon</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>The {currentWeapon} IS the murder weapon!!!</p>
      </div>
    );
  }
};

export default Examining;

import React, { useState } from "react";

const Examining = props => {
  const { murderWeapon, currentWeapon } = props;
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

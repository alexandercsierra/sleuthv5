import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GuestList = props => {
  const { guestList } = props;
  return (
    <div>
      Guest List:
      <div>
        {guestList.map(guest => {
          return (
            <div>
              <h3>{guest}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuestList;

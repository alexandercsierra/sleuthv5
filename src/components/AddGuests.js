import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Input,
  SubmitBtn,
  Form,
  FlexDiv,
  Button
} from "../styling/styled-components";

const List = styled.div`
  width: 50%;
  /* width: 20%; */
  /* height: 50%; */
  margin: 5% auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* border: 1px solid red; */
`;

const AddGuests = props => {
  const { gl, setGl, setIsFull } = props;
  const [currentGuest, setCurrentGuest] = useState("");

  useEffect(() => {
    if (gl.length === 7) {
      setIsFull(true);
      console.log("full");
    }
  }, [gl]);

  function handleChange(e) {
    setCurrentGuest(e.target.value);
    // console.log(gl);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (gl.length < 7 && gl.includes(currentGuest) === false) {
      setGl([...gl, currentGuest]);
      setCurrentGuest("");
    }
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <h1>Add a Guest</h1>
        <div>
          <Input
            id="addguest"
            name="addguest"
            value={currentGuest}
            onChange={handleChange}
            autoComplete="off"
          />
          <SubmitBtn>Submit</SubmitBtn>
        </div>
      </Form>
      <h3 style={{ marginTop: "10%" }}>Guest List:</h3>
      <List>
        {gl.map(guest => {
          return (
            <FlexDiv key={guest}>
              <h3 style={{ width: "100%", background: "transparent" }}>
                {guest}
              </h3>
            </FlexDiv>
          );
        })}
      </List>
    </div>
  );
};

export default AddGuests;

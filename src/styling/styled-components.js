import styled from "styled-components";
export const Button = styled.button`
  background: #7c0d0c;
  color: white;
  border: 1px solid white;
  padding: 1.5%;
  width: 10%;
  border-radius: 5px;
`;

export const Input = styled.input`
  background: transparent;
  border: 1px solid white;
  padding: 1%;
  color: white;
  font-size: 1.2rem;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

export const SubmitBtn = styled.button`
  font-size: 1.2rem;
  padding: 1%;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FlexDiv = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: dodgerblue;
`;

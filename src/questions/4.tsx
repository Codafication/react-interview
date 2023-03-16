import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #4d7298;
  color: #fff;
  display: inline-block;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #77a6b6;
  height: 52px;
  width: 100%;
  font-size: 24px;
`;

const Four = () => {
  return (
    <ul
      style={{
        listStyle: "none",
      }}
    >
      <li>
        <StyledButton>Home</StyledButton>
      </li>
      <li>
        <StyledButton>About Us</StyledButton>
      </li>
      <li>
        <StyledButton>Our Products</StyledButton>
      </li>
      <li>
        <StyledButton>Contact Us</StyledButton>
      </li>
    </ul>
  );
};

export default Four;

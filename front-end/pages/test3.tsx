import React, { useState } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import styled from "styled-components";

const appearDuration = 500;
const Container = styled.section`
  &.example-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  &.example-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }

  &.example-exit {
    opacity: 1;
  }

  &.example-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

const Parent = () => {
  const [showMessage, setshowMessage] = useState(false);
  return (
    <>
      <CSSTransition
        in={showMessage}
        classNames="example"
        timeout={appearDuration}
        unmountOnExit
      >
        <Container>This will have the appear transition applied!</Container>
      </CSSTransition>
      <button onClick={() => setshowMessage(!showMessage)}>Apply</button>
    </>
  );
};
export default Parent;

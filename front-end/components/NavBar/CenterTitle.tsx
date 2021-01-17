import styled from "styled-components";

const WLetterTitle = styled.h1`
  font-size: 33px;
  margin: auto;
  font-family: "Domine", serif;
  color: rgba(188, 75, 32);
`;

function CenterTitle({ children }) {
  return <WLetterTitle>{children}</WLetterTitle>;
}

export default CenterTitle;

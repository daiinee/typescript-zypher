import styled from "styled-components";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const WNavBar = styled.div`
  width: 90vw;
  padding: 20px;
  max-width: calc(1370px + 0px);
  margin-left: calc(-0px / 2);
  margin-right: calc(-0px / 2);
  height: 180px;
  display: grid;
  grid: 1fr / 1fr 2fr 1fr;
  border-bottom: 1px solid #dbdbdb;
  @media (max-width: 800px) {
    background: yellow;
  }
`;

const WLetterTitle = styled.h1`
  font-size: 33px;
  margin: auto;
  font-family: "Domine", serif;
  color: rgba(188, 75, 32);
`;

export default function NavBar({ title }) {
  return (
    <WNavBar>
      <SearchBar />
      <WLetterTitle>{title}</WLetterTitle>
      <NavIcons />
    </WNavBar>
  );
}

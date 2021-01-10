import styled from "styled-components";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const WNavBar = styled.div`
  height: 180px;
  display: grid;
  grid: 1fr / 1fr 2fr 1fr;
`;

const WLetterTitle = styled.h1`
  font-size: 33px;
  font-family: "Domine", serif;
  color: rgba(188, 75, 32);
  margin: auto;
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

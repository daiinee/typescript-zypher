import styled from "styled-components";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import CenterTitle from "./CenterTitle";

const WNavBar = styled.div`
  justify-self: center;
  width: 90vw;
  padding: 20px;
  max-width: calc(1370px + 0px);
  margin-left: calc(-0px / 2);
  margin-right: calc(-0px / 2);
  height: 181px;
  display: grid;
  grid: 1fr / 1fr 2fr 1fr;
  border-bottom: 1px solid #dbdbdb;
  @media (max-width: 800px) {
    background: yellow;
  }
`;

export default function NavBar({ title }) {
  return (
    <WNavBar>
      <SearchBar />
      <CenterTitle>{title}</CenterTitle>
      <NavIcons />
    </WNavBar>
  );
}

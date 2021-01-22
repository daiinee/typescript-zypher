import styled from "styled-components";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import CenterTitle from "./CenterTitle";

const WNavBar = styled.div`
  justify-self: center;
  width: 90vw;
  background: yellow;
  max-width: calc(1370px + 0px);
  display: grid;
  justify-items: center;

  gap: 20px;
  grid:
    "header header header" 1fr
    "footer footer footer" 3fr
    "footer footer footer" 2fr
    / auto 50px auto;
  border-bottom: 1px solid #dbdbdb;
  @media (max-width: 800px) {
    background: red;
    grid-template-areas:
      "header header header header"
      "footer footer footer footer"
      "main main . sidebar";
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

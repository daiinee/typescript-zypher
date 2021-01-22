import styled from "styled-components";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import CenterTitle from "./CenterTitle";

const WNavBar = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  height: 200px;
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

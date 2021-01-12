import styled from "styled-components";

const SearchBar = styled.div`
  height: 50px;
  background: #f2f2f2;
  display: grid;
  border-radious: 5p;
  margin: 20px;
  width: 80%;
  margin: auto;
  span {
    margin: auto;
    font-size: 16px;
    color: gray;
    font-family: "Inter", sans-serif;
  }
`;

export default function Search() {
  return (
    <SearchBar>
      <span>Search..</span>
    </SearchBar>
  );
}

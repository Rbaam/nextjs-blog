import styled from "styled-components";
import Link from "next/link";
import Dropdown from "./Nav/Dropdown";

const NavBar = styled.div`
  display: flex;
  height: 5rem;
  width: 100%;
  background-color: green;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.div`
  display: flex;
  margin-left: 10px;
  height: 4rem;
  width: 16rem;
  font-size: 20px;
  background-color: gray;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
`;

const Blank = styled.div`
  width: 40rem;
`;

const Menu = styled.div`
  margin-right: 1rem;
  display: flex;
  height: 4rem;
  width: 12rem;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  background-color: gray;
  :hover {
    background-color: yellow;
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <Title>
        <Link href="/z">마로니에</Link>
      </Title>
      <Blank />
      <Menu>카테고리1</Menu>
      <Menu>카테고리2</Menu>
      <Menu>카테고리3</Menu>
      <Menu>실험실</Menu>
    </NavBar>
  );
};

export default Nav;

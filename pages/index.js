import { styled, createGlobalStyle } from "styled-components";
import Nav from "../components/Nav";

const Globalstyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    background-color: #E1D1BA;
    margin: 0px;
    padding: 0px;
  }
`;

export default function Home() {
  return (
    <>
      <Globalstyle />
      <Nav />
    </>
  );
}

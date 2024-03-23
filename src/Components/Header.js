import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { propTypes } from "react-bootstrap/esm/Image";

const style ={
  Navclr : {
backgroundColor: "#eb5c08d1",
  },
  ankerclr : {
    color: "white",
      }
}

export default function Header(props) {
  return (
    <>
      <Navbar style={style.Navclr}>
        <Container >
          <Navbar.Brand style={style.ankerclr} href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={style.ankerclr} href="/Info">Info</Nav.Link>
            <Nav.Link style={style.ankerclr} href="/List"> {props.title}</Nav.Link>
            <Nav.Link style={style.ankerclr} href="/About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

Header.defaultProps = {
  title: "My Todo",
};
propTypes.Header = {
  title: propTypes.string,
}

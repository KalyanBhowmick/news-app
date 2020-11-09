import React from "react";
import { Navbar} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">News</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;

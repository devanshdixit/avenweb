import { Container, Nav, Navbar } from "react-bootstrap";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="section1-bg"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={`${process.env.PUBLIC_URL}/images/aven.png`}
            className="img-fluid"
            style={{ width: "100px" }}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="ml-auto">
            <Nav.Link
              href="#section1"
              className="headerlink"
              style={{ paddingLeft: ".8em" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#section2"
              className="headerlink"
              style={{ paddingLeft: ".8em" }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#section3"
              className="headerlink"
              style={{ paddingLeft: ".8em" }}
            >
              ContactUs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;

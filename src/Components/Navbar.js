import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "black" };
  } else {
    return { color: "black", borderBottom: "black 0.2em solid" };
  }
};

const Header = ({ history }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="section1-bg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/aven.png`}
              className="img-fluid"
              style={{ width: "60px", height: "40px", objectFit: "cover" }}
              alt=""
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
              <Link
                to="/apply"
                className="headerlink"
                style={currentTab(history, "/")}
              >
                Apply to be a Rider
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="#section1" className="headerlink">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="#section2" className="headerlink">
                Services
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="#section3" className="headerlink">
                ContactUs
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default withRouter(Header);

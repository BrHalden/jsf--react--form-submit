import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact.js";

function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <NavLink to="/" exact>
                    <Navbar.Brand>Website Name</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/aboutus" className="nav-link">
                            About
                        </NavLink>
                        <NavLink to="/contact" className="nav-link">
                            Contact Us
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
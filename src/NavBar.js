import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem
} from "reactstrap";
import { Link } from "react-scroll";

class NavBar extends React.Component {

    state = {
        isOpen: false,
        navHeight: 0
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    close = () => {
        this.setState({
            isOpen: false
        });
    };

    componentDidMount() {
        this.setState({ navHeight: -document.querySelector("nav").offsetHeight - 50 });
    }

    render() {
        const styles = {
            link: {
                marginRight: "5px",
                color: "white",
                textAlign: "center"
            },
            divider: {
                backgroundColor: "lightgray",
                height: "1px"
            },
            img: {
                backgroundColor: "rgb(52,58,64)",
                borderColor: "rgb(52,58,64)",
            },
            navitem: {
                color: "white",
                textAlign: "center",
                cursor: "pointer"
            },
            navbrand: {
                color: "white"
            }
        };

        const navLinks = ["About Me", "Projects", "Contact"];

        return (
            <Navbar className="navbar-expand-md navbar-dark bg-dark fixed-top">
                <NavbarBrand style={styles.navbrand}>
                    <img alt="html-tags" style={styles.img} id="html-tags" className="img-fluid img-thumbnail" src="/images/html_tags.png"></img>
                    Ernesto Garcia
                </NavbarBrand>
                <NavbarToggler type="button" onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-5">
                        {navLinks.map(navLink => {
                            return (
                                <React.Fragment key={navLink} >
                                    <NavItem style={styles.navitem} className="mr-3 my-1">
                                        <Link onClick={this.close}
                                            to={navLink}
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            offset={this.state.navHeight}>
                                            {navLink}
                                        </Link>
                                    </NavItem>
                                    <div style={styles.divider} className="w-100 d-md-none"></div>
                                </React.Fragment>
                            );
                        })}
                        <NavItem style={styles.navitem} className="mr-3 my-1">
                            <a onClick={this.close} style={styles.link} href="https://github.com/ernie1994/portfolio" target="_blank" rel="noopener noreferrer">My GitHub</a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
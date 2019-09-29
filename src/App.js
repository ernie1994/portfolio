import React from "react"
import { Container } from "reactstrap";
import NavBar from "./NavBar";
import Stars from "./Stars";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

class App extends React.Component {
    render() {
        return (
            <>
                <Container fluid>
                    <NavBar />
                    <br></br><br></br>
                    <Stars />
                    <About />
                    <Projects />
                    <Contact />
                </Container>
            </>
        );
    }
}

export default App;
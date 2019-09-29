import React from "react";
import { Row, Col, Jumbotron } from "reactstrap";
import { Link } from "react-scroll";

class Stars extends React.Component {

    state = {
        navHeight: 0
    };

    componentDidMount() {
        this.setState({ navHeight: -document.querySelector("nav").offsetHeight - 50 });
    }

    render() {

        const styles = {
            header: {
                color: "white",
                textAlign: "center",
            },
            background: {
                backgroundImage: 'url("/images/starry-night.jpg")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionY: "60%"
            },
            button: {
                borderColor: "black",
                fontWeight: "bold"
            },
            col: {
                textAlign: "center"
            }
        };

        return (
            <Row style={styles.background} className="p-5">
                <Col style={styles.col}>
                    <Jumbotron className="bg-transparent">
                        <h1 style={styles.header} className="display-4">
                            My name is
                                <br></br>
                            <strong>Ernesto Garcia</strong>.
                                <br></br>
                            I am a<br></br>Full Stack Developer.
                        </h1>
                        <br></br>
                        <Link onClick={this.close} to="Projects" spy={true} smooth={true} duration={500} offset={this.state.navHeight}>
                            <button type="button" className="btn btn-light">My Work</button>
                        </Link>
                    </Jumbotron>
                </Col>
            </Row>
        );
    }
}

export default Stars;
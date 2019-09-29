import React from "react";
import { Col, Row } from "reactstrap";
import { Element } from "react-scroll";

class About extends React.Component {
    render() {

        const styles = {
            gradPic: {
                width: "250px",
                height: "250px",
                marginBottom: "10%",
                borderRadius: "50%"
            },
            header: {
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "20px"
            }
        };


        return (
            <Element name="About Me">
                <Row className="mt-5 d-flex justify-content-center align-items-center">
                    <Col md={4} className="text-center text-md-right">
                        <img
                            style={styles.gradPic}
                            alt="Graudation"
                            src="/images/graduation-pic-square.png">
                        </img>
                    </Col>
                    <Col xs={9} md={6} className="ml-3">
                        <h1 style={styles.header} className="text-center text-md-left">ABOUT ME</h1>
                        <p className="mt-3 text-center text-md-left">
                            I am a highly-motivated full-stack web developer. My
                            journey in the tech industry began after graudating from
                            UCLA with a Bachelor's of Science in Neuroscience.
                            Through many hours of book-reading and YouTube video-watching,
                            I taught myself the basics of iOS programming.
                            Because of the many technologies and languages I had not
                            mastered, I joined the UC Davis Full-Stack
                            Bootcamp to gain the skills to become a full-fledged developer.
                    </p>
                    </Col>
                </Row>
            </Element>
        );
    }
}

export default About;
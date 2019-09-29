import React from "react";
import { Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class Project extends React.Component {

    render() {

        const styles = {
            projectImage: {
                display: "block",
                boxShadow: "-10px -10px 10px 5px lightgray",
                width: "50%",
                height: "auto",
                maxHeight: "300px"
            },
            projectTitle: {
                fontFamily: "'Lato', sans-serif"
            },
            projectDescr: {
                color: "gray",
                fontFamily: "'Lato', sans-serif"
            },
            divider: {
                backgroundColor: "lightgray",
                height: "1px"
            }
        };

        const proj = this.props;

        const project = (
            <Row className="justify-content-center justify-content-md-start">
                <Col md={6} className="d-flex justify-content-center justify-content-md-end">
                    <img style={styles.projectImage} alt={proj.title} src={`/images/${proj.image}`} className="img-fluid img-thumbnail"></img>
                </Col>

                <Col md={6} className="text-center text-md-left">
                    <br></br>
                    <h2 style={styles.projectTitle}>{proj.title}</h2>
                    <h6 style={styles.projectDescr} className="text-center text-md-left">{proj.description}</h6>
                    <br></br>

                    {proj.appUrl &&
                        <a className="btn btn-secondary btn-sm mr-3" href={proj.appUrl} target="_blank" rel="noopener noreferrer">
                            Open App
                        </a>
                    }

                    <a className="btn btn-dark btn-sm" href={proj.githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub Code
                    </a>
                </Col>
            </Row>
        );

        return (
            <>
                <Col
                    xs={12}
                    className="my-5"
                >
                    <ScrollAnimation
                        animateOnce
                        animateIn={proj.fromRight ? "bounceInRight" : "bounceInLeft"}>
                        {project}
                    </ScrollAnimation>
                </Col>
                <div className="w-100" style={styles.divider}></div>
            </>
        );

    }

}

export default Project;
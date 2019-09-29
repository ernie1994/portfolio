import React from "react";
import { Element } from "react-scroll";
import { Row } from "reactstrap";
import projects from "./utils/projects";
import Project from "./Project";

class Projects extends React.Component {
    render() {
        const styles = {
            projectHeader: {
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "20px"
            }
        };

        return (
            <Element name="Projects">
                <Row className="d-flex justify-content-center">
                    <h1 style={styles.projectHeader}>PROJECTS</h1>
                    {projects.map(proj => {
                        return <Project
                            fromRight={projects.indexOf(proj) % 2 === 0}
                            {...proj}
                            key={proj.githubUrl} />
                    })}
                </Row>
            </Element>
        );
    }
}
export default Projects;
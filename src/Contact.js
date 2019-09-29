import React from "react";
import { Element } from "react-scroll";
import { Row, Col, Form, FormGroup, Input, Button } from "reactstrap";

class Contact extends React.Component {

    state = {
        name: "",
        email: "",
        phone: "",
        message: ""
    };

    submit = event => {
        event.preventDefault();
        const url = "mailto:ernesto.garcia.lb@gmail.com?subject="
            + encodeURIComponent("Job Offer")
            + "&body="
            + encodeURIComponent("Hi, \nMy name is " + this.state.name + ".")
            + encodeURIComponent("\n \n" + this.state.message)
            + encodeURIComponent("\nCall or text me at ")
            + encodeURIComponent(this.state.phone)
            + encodeURIComponent(" or email me at " + this.state.email + "!");

        window.open(url, "_parent");
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        }, () => console.log(this.state));
    };

    phoneKeyDown = event => {

        if (event.keyCode === 8) return;

        if (this.state.phone.length >= 13) return;

        event.preventDefault();

        const key = event.key;
        const regex = new RegExp("^[0-9]*$");

        const text = event.target.value;

        let number = text
            .replace("(", "")
            .replace(")", "")
            .replace("-", "");

        switch (key) {
            case "(":
                if (!(number.length === 0 && text.indexOf(key) === -1)) return;
                break;
            case ")":
                if (!(number.length === 3 && text.indexOf(key) === -1)) return;
                break;
            case "-":
                if (!(number.length === 6 && text.indexOf(key) === -1)) return;
                break;
            default:
                if (!(regex.test(key))) return;
        };

        number = `${number}${key}`
            .replace("(", "")
            .replace(")", "")
            .replace("-", "");


        if (number.length > 5) {
            number = "(" + number.slice(0, 3) + ")" + number.slice(3, 6) + "-" + number.slice(6);
        }
        else if (number.length > 2) {
            number = "(" + number.slice(0, 3) + ")" + number.slice(3, number.length);
        }
        else if (number.length > 0) {
            number = "(" + number.slice(0, number.length);
        }
        else if (number.length === 0) {
            number = "(";
        }

        event.target.value = number;

        this.setState({ phone: number }, () => {
            const phoneInput = document.querySelector("#phone");
            if (this.state.phone.length !== 13) {
                phoneInput.setCustomValidity("Valid phone number required");
            } else {
                phoneInput.setCustomValidity("");
            }
        });
    };

    render() {

        const styles = {
            header: {
                marginTop: "0px",
                color: "white"
            },
            smallHeaders: {
                color: "white",
                textAlign: "center"
            },
            mail: {
                width: "100px",
                height: "100px",
            },
            background: {
                backgroundColor: "black"
            }
        };

        return (
            <Element name="Contact">
                <Row style={styles.background} className="p-5 d-flex justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={6}>

                        <Row className="d-flex align-items-center">
                            <Col md={4} className="d-flex justify-content-center">
                                <img style={styles.mail} alt="mail-logo" src="/images/mail.png"></img>
                            </Col>
                            <Col md={6}>
                                <h1 style={styles.header} className="text-center text-md-left">CONTACT</h1>
                            </Col>
                        </Row>

                        <br></br>

                        <Form onSubmit={this.submit}>
                            <FormGroup>
                                <Input invalid name="name" onChange={this.handleChange} type="text" placeholder="Name" required></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input invalid name="email" onChange={this.handleChange} type="email" placeholder="Email" required></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input id="phone" invalid name="phone" onKeyDown={this.phoneKeyDown} onChange={this.handleChange} type="text" placeholder="Phone Number" minLength={13} maxLength={13} required></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input name="message" onChange={this.handleChange} type="textarea" placeholder="Message"></Input>
                            </FormGroup>
                            <FormGroup row>
                                <Col className="d-flex justify-content-center">
                                    <Button className="btn btn-dark" type="submit">Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>

                        <br></br>

                        <h6 style={styles.smallHeaders}>ernesto.garcia.lb@gmail.com</h6>
                        <h6 style={styles.smallHeaders}>(209)592-8539</h6>

                    </Col>
                </Row>
            </Element>
        );
    }
}

export default Contact;
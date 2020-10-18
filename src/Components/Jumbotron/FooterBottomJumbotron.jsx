import React from 'react'

import "./Jumbotron.css";
import logo from "../../Images/LogoVertical.png"

import {
  Button,
  Col,
  Jumbotron,
  Form,
  FormControl,
  Container,
  Row
} from "react-bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook, faInstagram, faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

library.add(
    faFacebook,
    faInstagram,
    faYoutube,
)

function FooterBottomJumbotron() {
    const fbIcon = <FontAwesomeIcon icon={ faFacebook } style={{color: "#fff"}}/>
    const ytIcon = <FontAwesomeIcon icon={ faYoutube } style={{color: "#fff"}}/>
    const igIcon = <FontAwesomeIcon icon={ faInstagram } style={{color: "#fff"}}/>
    const mapIcon = <FontAwesomeIcon icon={ faMapMarkerAlt } style={{color: "#BDBDBD"}}/>
    const phoneIcon = <FontAwesomeIcon icon={ faPhone } style={{color: "#BDBDBD"}}/>
    const mailIcon = <FontAwesomeIcon icon={ faEnvelope } style={{color: "#BDBDBD"}}/>

    return (
        <div>
        <Jumbotron fluid className="footer-bottom__jumbotron">
            <Container>
                <Row>
                <Col lg={3}>
                    <img src={logo} alt="logo" />
                </Col>
                <Col lg={3}>
                    <h5 className="text-stly__footer">ALL CATEGORIES</h5>
                    <ul className="list__footer list__footer__style">
                        <li>All Deals</li>
                        <li>Hotels</li>
                        <li>Activities</li>
                        <li>Spa Packages</li>
                        <li>Hotel Day Packages</li>
                        <li>Restaurants</li>
                        <li>Fitness</li>
                        <li>Rodrigues</li>
                    </ul>
                </Col>
                <Col lg={3}>
                    <h5 className="text-stly__footer">ADDITIONAL INFORMATION</h5>
                    <ul className="list__footer" style={{marginLeft: "-30px"}}>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>How does it work?</li>
                        <li>Frequently Asked Questions</li>
                        <li>Deals.mu loyalty program</li>
                        <li>Promote your Business on BTP</li>
                    </ul>
                    <Row>
                        <h5 className="social__network">SOCIAL NETWORK</h5>
                        <span className="icon__style">{ fbIcon }</span>
                        <span className="icon__style">{ ytIcon }</span>
                        <span className="icon__style">{ igIcon }</span>
                    </Row>
                </Col>
                <Col lg={3}>
                    <h5 className="text-stly__footer">LEGAL INFORMATION</h5>
                    <ul className="list__footer" style={{marginLeft: "-1px"}}>
                        <li>Terms & Conditions</li>
                        <li>Disclaimer</li>
                        <li>Cancellation policy</li>
                        <li>Privacy</li>
                    </ul>
                </Col>
                </Row>
                <Row style={{marginTop: "60px"}}>
                    <Col lg={6} className="col__details">
                        <h5>CONTACT DETAILS</h5>
                        <div style={{marginTop: "40px"}}>
                            <p>
                                Feel free to contact us by phone, email or by our contact form
                            </p>
                            <p>{mapIcon} &nbsp;&nbsp; 9748 Blossom Hill Rd undefined Lansing, Idaho 68545 United States</p>
                            <p>{phoneIcon} &nbsp;&nbsp; Tel (business hours) : 269 1500 </p>
                            <p style={{marginTop: "-20px", marginLeft: "34px"}}> Tel (hotline) Monday - Saturday: 52-56-61-38 (08:00 am – 20:00 pm)</p>
                            <p style={{marginTop: "-20px", marginLeft: "34px"}}>Tel (hotline) Sunday: 52-56-61-38 (08:00 am – 14:00 pm)</p>
                            <p>{mailIcon} &nbsp;&nbsp; fajarardiyanto.web@gmail.com</p>
                        </div>
                    </Col>
                    <Col lg={6} className="col__details">
                        <h5>SEND US MESSAGE</h5>
                        <div style={{marginTop: "40px"}}>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} >
                                        <Form.Control type="text" placeholder="Your Full Name*" />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Control type="number" placeholder="Phone Number*" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group>
                                    <Form.Control as="textarea" rows={3} placeholder="Message"/>
                                </Form.Group>

                                <Button variant="danger" type="submit">
                                    Submit
                                </Button>
                                <p style={{float: "right", fontSize: "12px"}}>* Required Fields</p>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <p style={{color: "#fff", marginTop: "110px", fontSize: "14px"}}>Disclaimer &nbsp;&nbsp; Conditions of use &nbsp;&nbsp; Cancellation policy</p>
            </Container>
        </Jumbotron>
        </div>
    )
}

export default FooterBottomJumbotron;

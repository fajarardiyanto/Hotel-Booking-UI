import React from "react";

import "./Jumbotron.css";

import {
  Button,
  Col,
  Jumbotron,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";

function FooterJumbotron() {
  return (
    <div>
      <Jumbotron fluid className="footer__jumbotron">
        <Container className="div__col__footer">
          <Col className="col__text">
            <h5 className="text__white">subscribe to our</h5>
            <h1 className="text__white">NEWSSLETTER</h1>
          </Col>
          <Col className="col__email">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Your email address"
                className="mr-sm-2 nav__search input__email"
              />
              <Button variant="danger icon__nav__search">SEND</Button>
            </Form>
          </Col>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default FooterJumbotron;

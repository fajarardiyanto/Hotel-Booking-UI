import React from "react";

import "./Card.css";

import { Card, Button, Container, Row } from "react-bootstrap";

function CardActivities(props) {
  let activitiesList = props.activities.map((activity) => {
    return (
      <div>
        <Container>
          <Card className="bg-dark text-white size__activities">
            <div className="img__gradient">
              <img
                src={activity.image}
                alt="Card image"
                className="size__activities img__style"
              />
            </div>
            <Card.ImgOverlay className="img__overlay">
              <Card.Title>{activity.title}</Card.Title>
              <Button variant="danger" className="float-left btn__activities">
                BOOK NOW
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Container>
      </div>
    );
  });

  return (
    <div style={{ margin: "0 20px 0 120px" }}>
      <h3 className="title__activities">OTHER ACTIVITES</h3>
      <Row>{activitiesList}</Row>
    </div>
  );
}

export default CardActivities;

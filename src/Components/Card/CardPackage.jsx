import React from "react";

import "./Card.css";

import { formatNumber } from "../Utils/FormatNumber";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function CardPackage(props) {
  const MarkIcon = (
    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "12px" }} />
  );

  const UserIcon = (
    <FontAwesomeIcon icon={faUser} style={{ marginRight: "12px" }} />
  );

  const RoomIcon = (
    <FontAwesomeIcon icon={faHome} style={{ marginRight: "12px" }} />
  );

  let tripCardList = props.trips.map((trip) => {
    return (
      <div style={{ marginTop: "40px" }}>
        <Col>
          <Card className="card__package">
            <Card.Img variant="top" src={trip.image} />
            <Card.Body>
              <Card.Title>{trip.tripName}</Card.Title>
              <Card.Text>{MarkIcon} 1749 Wheeler Ridge Delaware</Card.Text>
              <Card.Text>
                {UserIcon} {trip.guest} x Guests
              </Card.Text>
              <Card.Text>{RoomIcon} 1 x Room</Card.Text>
              <h5 className="price__crossout">
                {formatNumber.format(trip.price)}
              </h5>
              <Row>
                <Col>
                  <h2 className="price__disc">
                    {formatNumber.format(trip.price * 0.5)}
                  </h2>
                </Col>
                <Col>
                  <Button variant="danger" className="btn__booknow">
                    Book Now
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  });

  return (
    <div style={{ margin: "0 20px 0 60px" }}>
      <h1 className="title__package">TRIP PACKAGE</h1>
      <Row>{tripCardList}</Row>
    </div>
  );
}

export default CardPackage;

import React from "react";
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

const Home = () => {
  return (

<div className="cardBox">
<Card bg="primary" text="white">
<Card.Header>CrimeNo</Card.Header>
<Card.Body>
<Card.Title>Primary Card Title</Card.Title>
<Card.Text>
  Crimeno was developed to help tackle the increasing
  recurring crimes in particular areas. A RESTful MERN stack app,
  centred around the Police and Google Maps API. Users can pinpoint
  a location where a crime was committed using google maps markers.
   Other users will then be made aware of these crimes if they search a route within that area of the crime. There is also a heatmap derived from the Police API that highlights the crime in areas.
</Card.Text>
</Card.Body>
</Card>
<div className="overlay">
</div>
<br />

<Card bg="secondary" text="white">
<Card.Header>Header</Card.Header>
<Card.Body>
<Card.Title>Secondary Card Title</Card.Title>
<Card.Text>
  Some quick example text to build on the card title and make up the bulk
  of the card's content.
</Card.Text>
</Card.Body>
</Card>
<br />

<Card bg="success" text="white">
<Card.Header>Header</Card.Header>
<Card.Body>
<Card.Title>Success Card Title</Card.Title>
<Card.Text>
  Some quick example text to build on the card title and make up the bulk
  of the card's content.
</Card.Text>
</Card.Body>
</Card>
<br />

<Card bg="danger" text="white">
<Card.Header>Header</Card.Header>
<Card.Body>
<Card.Title>Danger Card Title</Card.Title>
<Card.Text>
  Some quick example text to build on the card title and make up the bulk
  of the card's content.
</Card.Text>
</Card.Body>
</Card>
<br />

<Card bg="warning" text="white">
<Card.Header>Header</Card.Header>
<Card.Body>
<Card.Title>Warning Card Title</Card.Title>
<Card.Text>
  Some quick example text to build on the card title and make up the bulk
  of the card's content.
</Card.Text>
</Card.Body>
</Card>
<br />

<Card bg="info" text="white">
<Card.Header>Header</Card.Header>
<Card.Body>
<Card.Title>Info Card Title</Card.Title>
<Card.Text>
  Some quick example text to build on the card title and make up the bulk
  of the card's content.
</Card.Text>
</Card.Body>
</Card>
<br />

<Card bg="dark" text="white">
<Card.Header>Header</Card.Header>
<Card.Body>
<Card.Title>Dark Card Title</Card.Title>
<Card.Text>
  Some quick example text to build on the card title and make up the bulk
  of the card's content.
</Card.Text>
</Card.Body>
</Card>
<br />

<Card bg="light">
<Card.Header>Header</Card.Header>
<Card.Body>
<Card.Title>Light Card Title</Card.Title>
<Card.Text>
  Some quick example text to build on the card title and make up the bulk
  of the card's content.
</Card.Text>
</Card.Body>
</Card>
<br />
</div>
)
  }
export default Home;

import React from 'react';
import { Card, CardHeader, CardImg, CardBody, CardTitle } from 'reactstrap';

import './JokeCard.css';

const JokeCard = ({ joke }) => {
  return (
    <Card>
      <CardHeader>
        <h2>{joke.category || 'Random'} Joke</h2>
      </CardHeader>
      <CardImg top width="100%" src={joke.icon_url} alt="Card image cap" />
      <CardBody>
        <CardTitle>{joke.value}</CardTitle>
      </CardBody>
    </Card>
  );
};

export default JokeCard;

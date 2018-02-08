import React from 'react';
import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import { ScaleLoader } from 'react-spinners';

const LoadingCard = () => {
  return (
    <Card>
      <CardHeader>Loading</CardHeader>
      <CardBody>
        <CardTitle>Fetching the funny...</CardTitle>
        <ScaleLoader color={'#212529'} loading={true} />
      </CardBody>
    </Card>
  );
};

export default LoadingCard;

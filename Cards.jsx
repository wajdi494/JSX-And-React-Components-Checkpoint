import React from 'react';
import Image from './Image';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Cards() {
  return (
    <div className="cards-container">
         <Card style={{ width: '18rem' }}>
      <Image/> 
      <div className="des">
      <Name/>
      <Description/>
      <Price/>
      <Button variant="primary">Buy Now</Button>
    </div>
  </Card>
    </div>

  );
}

export default Cards;
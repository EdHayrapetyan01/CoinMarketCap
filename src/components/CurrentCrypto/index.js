import React from 'react';
import CardImage from '../assets/bitcoin.jpeg';
import { useHistory } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

export default function CurrenyCrypto(props) {
  const notify = () => toast('Successfully added!');
  const history = useHistory();

  const { crypto } = props.location.state;

  const handlePrev = () => {
    history.push('/cryptocurrencies');
  };

  return (
    <div>
      <Card>
        <CardImg width='100%' src={CardImage} alt='Card image cap' />
        <CardBody>
          <CardTitle>{crypto.name}</CardTitle>
          <CardSubtitle>{crypto.total_supply}</CardSubtitle>
          <CardText>{crypto.date_added}</CardText>
          <Button color='success' onClick={notify}>
            Buy Now
          </Button>
        </CardBody>
      </Card>

      <div className='back'>
        <Button onClick={handlePrev} color='primary'>
          Back to crypto currencies
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
}

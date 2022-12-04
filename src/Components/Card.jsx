import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Card.css';


const Card = (props) => {
  return(
    <div className='card'>
      <Link to='/details' state= {props.tags} className='card-link'>
      <img alt = 'items' src = {`${props.image}`} class='card-img'/>
      <h2 class='card-heading'>{props.name}</h2>
      </Link>
    </div>
  );
}

export default Card;

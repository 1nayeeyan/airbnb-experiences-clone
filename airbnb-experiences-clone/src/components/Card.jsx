/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Card(props) {
  return (
    <div className="card">
      {props.item.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
      <img src={props.item.coverImg} className="card--image" alt="Person" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" alt="rating" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">
          (
          {props.item.stats.reviewCount}
          )
          •
        </span>
        <span className="gray">
          {props.item.location}
        </span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">{props.item.price}</span>
        / Person
      </p>
    </div>
  );
}

export default Card;

import React from "react";
// import { Container, Row, Col } from 'reactstrap';
import "./FriendCard.css";

const FriendCard = (props) => (
<div className="col-xs-6 col-sm-6 col-md-3 container">
    <div className="img-box">
      <img
        src={ props.image }
      />
   </div>
  </div>
);

export default FriendCard;
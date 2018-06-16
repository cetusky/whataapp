import React from "react";
import "./randomcard.css";

const randomcard = props => (
  // <div className="container">
    <div className="card">
      <div className="img-container" dataid={props.id} onClick={() => props.randomRender(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">𝘅</span> */}
    </div>
  // </div>

);

export default randomcard;
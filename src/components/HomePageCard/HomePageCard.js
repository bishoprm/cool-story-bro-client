import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function HomePageCard(props) {
  return (
    <div
      className="card"
      style={{
        color: props.color,
        backgroundColor: props.backgroundColor,
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Link to={`homepages/${props.id}`}>
        <button>Visit Page</button>
      </Link>
    </div>
  );
}

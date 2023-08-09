import React from "react";
import { Link } from "react-router-dom";
const Cocktail = ({ image, glass, name, info, id }) => {
  return (
    <article className="cocktail">
      <figure className="img-container">
        <img src={image} alt={name} />
      </figure>
      <footer className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </footer>
    </article>
  );
};

export default Cocktail;

import React from "react";

export default function Card({card}) {
  return (
      <div className="card">
        <button type="button" className="card__remove"></button>
        <img 
        src={card.link} 
        alt={card.name} 
        className="card__image" />
        <div className="card__place-options">
          <h2 className="card__place-name">{card.name}</h2>
          <div className="card__button-container">
            <button type="button" className="card__like"></button>
            <p className="card__like_counter">{card.likes.length}</p>
          </div>
        </div>
      </div>
  );
}

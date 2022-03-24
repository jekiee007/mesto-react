import React from "react";

export default function ImagePopup({card, onClose}) {
  return (
    <div className={card ? "popup popup_picture popup_opened" : "popup popup_picture"} id="popupImage">
      <figure className="popup__zoomed-picture">
        <button type="button" className="popup__close" onClick={onClose}></button>
        <img 
        src={card ? card.link : ""} 
        alt={card ? card.name : ""} 
        className="popup__image" />
        <figcaption className="popup__picture-caption">{card ? card.name : ""}</figcaption>
      </figure>
    </div>
  );
}

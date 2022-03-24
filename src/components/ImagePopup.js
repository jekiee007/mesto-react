export default function ImagePopup() {
  return (
    <div className="popup popup_picture" id="popupImage">
      <figure className="popup__zoomed-picture">
        <button type="button" className="popup__close"></button>
        <img src="#" alt="#" className="popup__image" />
        <figcaption className="popup__picture-caption"></figcaption>
      </figure>
    </div>
  );
}

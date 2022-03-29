import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [cardName, setCardName] = React.useState("");
  const [cardImage, setCardImage] = React.useState("");

  React.useEffect(() => {
    setCardName("");
    setCardImage("");
  }, [isOpen]);

  function handleClose() {
    onClose();
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
          name: cardName,
          link: cardImage,
    })
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="card-editor"
      buttonName="Создать"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            className="popup__input popup__input_type_title"
            name="title"
            type="text"
            id="title-input"
            minLength="2"
            maxLength="30"
            placeholder="Название"
            pattern="^[a-zA-Zа-яА-я-\s]+$"
            required
          />
          <span className="title-input-error"></span>
          <input
            className="popup__input popup__input_type_url"
            name="popupTypeURL"
            type="url"
            id="url-input"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="url-input-error"></span>
        </>
      }
    ></PopupWithForm>
  );
}

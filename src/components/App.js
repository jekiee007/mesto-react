import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App(props) {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOped] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOped(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setIsAddPlacePopupOped(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          title="Редактировать профиль"
          name="profile-editor"
          buttonName="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
                className="popup__input popup__input_type_name"
                name="popupTypeName"
                placeholder="Имя"
                type="text"
                id="popupTypeName-input"
                minLength="2"
                maxLength="40"
                pattern="^[a-zA-Zа-яА-я-\s]+$"
                required
              />
              <span className="popupTypeName-input-error"></span>
              <input
                className="popup__input popup__input_type_job"
                name="popupTypeJob"
                placeholder="Работа"
                type="text"
                id="popupTypeJob-input"
                minLength="2"
                maxLength="200"
                pattern="^[a-zA-Zа-яА-я-\s]+$"
                required
              />
              <span className="popupTypeJob-input-error"></span>
            </>
          }
        />

        <PopupWithForm
          title="Новое место"
          name="card-editor"
          buttonName="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
        />

        <PopupWithForm
          title="Обновить аватар"
          name="card-editor"
          buttonName="Обновить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
                className="popup__input popup__input_type_url"
                name="popupTypeURL"
                type="url"
                id="avatar-url-input"
                placeholder="Ссылка на аватар"
                required
              />
              <span className="avatar-url-input-error"></span>
            </>
          }
        />
      </div>
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </div>
  );
}

export default App;

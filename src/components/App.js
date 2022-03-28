import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOped] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

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

  React.useEffect(() =>
    Promise.all([api.getProfileInfo(), api.getCards()])
      .then(([data, cards]) => {
        setCurrentUser(data);
        setCards(cards);
      })
      .catch((err) => {
        console.log(`Ошибка получения данных с сервера ${err}`);
      })
  );

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    // пока дошло, что метода changeLikeCardStatus нету в апи >_<
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            // onCardDelete={handleCardDelete}
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
    </CurrentUserContext.Provider>
  );
}

export default App;

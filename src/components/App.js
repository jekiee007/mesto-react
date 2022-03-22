import React from "react";

function App() {
  return (

  <body className="page">
    <div className="page__container">
      <header className="header">
        <img
          src="./images/logo__mesto.svg"
          alt="Лого место"
          className="header__logo"
        />
      </header>

      <main>
        <section className="profile">
          <img
            src="./images/profile__image.jpg"
            alt="Фото профиля"
            className="profile__avatar"
          />
          <div className="profile__avatar-edit"></div>
          <div className="profile-info">
            <h1 className="profile-info__name">Жак-Ив Кусто</h1>
            <button className="profile-info__edit-button" type="button"></button>
            <p className="profile-info__job">Исследователь океана</p>
          </div>
          <button className="profile__add-button" type="button"></button>
        </section>

        <section className="places"></section>
      </main>

      <footer className="footer">
        <p>&copy; 2021 Mesto Russia</p>
      </footer>
    </div>

    {/* попап профиля */}
    <article className="popup" id="popupProfile">
      <div className="popup__profile-editor">
        <button className="popup__close" type="button"></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        {/* Форма редактирования профиля */}
        <form className="popup__form" name="popupForm" novalidate>
          <input
            className="popup__input popup__input_type_name"
            name="popupTypeName"
            placeholder="Имя"
            type="text"
            id="popupTypeName-input"
            minlength="2"
            maxlength="40"
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
            minlength="2"
            maxlength="200"
            pattern="^[a-zA-Zа-яА-я-\s]+$"
            required
          />
          <span className="popupTypeJob-input-error"></span>
          <button className="popup__button" type="submit">Сохранить</button>
        </form>
      </div>
    </article>

    {/* попап карточки */}
    <div className="popup" id="popupCardCreator">
      <div className="popup__card-editor">
        <button className="popup__close" type="button"></button>
        <h2 className="popup__title">Новое место</h2>
        {/* форма карточки */}
        <form className="popup__form" name="popupForm" novalidate>
          <input
            className="popup__input popup__input_type_title"
            name="title"
            type="text"
            id="title-input"
            minlength="2"
            maxlength="30"
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
          <button className="popup__button" type="submit">Создать</button>
        </form>
      </div>
    </div>

    {/* "место" - карточка */}
    <template id="placeCard">
      <div className="card">
        <button type="button" className="card__remove"></button>
        <img src="#" alt="#" className="card__image" />
        <div className="card__place-options">
          <h2 className="card__place-name"></h2>
          <div className="card__button-container">
            <button type="button" className="card__like"></button>
            <p className="card__like_counter">0</p>
          </div>
        </div>
      </div>
    </template>

    {/* "место" - увеличинная фотография */}
    <div className="popup popup_picture" id="popupImage">
      <figure className="popup__zoomed-picture">
        <button type="button" className="popup__close"></button>
        <img src="#" alt="#" className="popup__image" />
        <figcaption className="popup__picture-caption"></figcaption>
      </figure>
    </div>

    {/*  Попап подтверждения удаления карточки */}
    <div className="popup" id="deleteConfirmation">
      <div className="popup__delete-picture-confirm">
        <h2 className="popup__title">Вы уверены?</h2>
        <button type="button" className="popup__close"></button>
        <button className="popup__button popup__button_delete-confirm">Да</button>
      </div>
    </div>

    {/* Попап обновления аватара */}
    <div className="popup" id="popupAvatarUpdate">
      <div className="popup__card-editor">
        <button className="popup__close" type="button"></button>
        <h2 className="popup__title">Обновить аватар</h2>
        {/* форма аватара */}
        <form className="popup__form" name="popupForm" novalidate>
          <input
            className="popup__input popup__input_type_url"
            name="popupTypeURL"
            type="url"
            id="avatar-url-input"
            placeholder="Ссылка на аватар"
            required
          />
          <span className="avatar-url-input-error"></span>
          <button className="popup__button" type="submit">Обновить</button>
        </form>
      </div>
    </div>
  </body>

  );
}

export default App;

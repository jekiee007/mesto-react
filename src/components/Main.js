import React from "react";
import api from "../utils/api";
import Card from "./Card";

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() =>
    Promise.all([api.getProfileInfo(), api.getCards()])
      .then(([data, cards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(`Ошибка получения данных с сервера ${err}`);
      })
  );

  return (
    <main>
      <section className="profile">
        <img src={userAvatar} alt="Фото профиля" className="profile__avatar" />
        <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
        <div className="profile-info">
          <h1 className="profile-info__name">{userName}</h1>
          <button
            className="profile-info__edit-button"
            type="button"
            onClick={onEditProfile}
          ></button>
          <p className="profile-info__job">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="places">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick}/>
        ))}
      </section>
    </main>
  );
}

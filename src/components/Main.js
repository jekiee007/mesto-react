export default function Main(){
    return (<main>
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
      </main>);
}


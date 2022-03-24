export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace}){
  
    return (<main>
        <section className="profile" >
          <img
            src="./images/profile__image.jpg"
            alt="Фото профиля"
            className="profile__avatar"
          />
          <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
          <div className="profile-info">
            <h1 className="profile-info__name">Жак-Ив Кусто</h1>
            <button className="profile-info__edit-button" type="button" onClick={onEditProfile}></button>
            <p className="profile-info__job">Исследователь океана</p>
          </div>
          <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>
    
        <section className="places"></section>
      </main>);
}


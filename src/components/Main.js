import React, { useState, useEffect } from 'react';
import {mestApi} from '../utils/Api.js'
import Card from './Card.js'
import { errMsg4GetCardsInfo } from '../utils/constants.js'
function Main(props) {
  const [userName, setUserName] = useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = useState("Исследователь океана");
  const [userAvatar, setUserAvatar] = useState("https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg");     // ./../images/cousteau/cousteau_image.png
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    Promise.all([mestApi.autorize(), mestApi.getInitialCards()]).then(result => {
      setUserName(result[0].name); setUserDescription(result[0].about); setUserAvatar(result[0].avatar);
      // , id: result[0]._id, cohort: result[0].cohort
      setCards(result[1].map((card, i) => (
        <Card key={`card_${String(i)}_${card._id}`} card={card} onCardClick={props.clickHandlers.onCardClick} />
      )));
    }).catch(err => console.log(errMsg4GetCardsInfo(err)));
  }, []);
  
  return (
    <main className="content">
      <section className="cousteau" onKeyDown={props.onClose}>
        <div className="cousteau__item">
          <button type="button" className="cousteau__avedit" form={props.formName.avatar} onClick={props.clickHandlers.onEditAvatar}></button>
          <img src={userAvatar} className="cousteau__image cousteau__area-photo" alt={userName} />
          <h1 className="cousteau__title cousteau__area-title">{userName}</h1>
          <button type="button" className="cousteau__box cousteau__area-box" form={props.formName.profile}
            onClick={props.clickHandlers.onEditProfile}>
          </button>
          <p className="cousteau__subtitle cousteau__area-subtitle">{userDescription}</p>
        </div>
        <button type="button" className="cousteau__button" form={props.formName.card} onClick={props.clickHandlers.onAddPlace}></button>
      </section>
      <section className="places" aria-label="три колонки">
        <ul className="table">{cards}</ul>
      </section>
    </main>
  );
}

export default Main;
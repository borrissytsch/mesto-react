// import './App.css';
import React, { useState } from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import PopupWithFormInput from './PopupWithFormInput.js'
import ImagePopup from './ImagePopup.js'
import {avatarProp, profileProp, cardProp, confirmProp
  , avatarInputs, profileInputs, cardInputs
  , captionProfileButton, captionCardButton, captionConfirmButton, popupActiveClass
} from '../utils/constants.js'
function App() {
  const [isEditAvatarPopupOpen, setAvatarOpen] = useState(false);
  const [isEditProfilePopupOpen, setProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddCardOpen] = useState(false);
  const [selectedCard, setCardOpen] = useState(null);
  const clickHandlers = {onEditAvatar: handleEditAvatarClick, onEditProfile: handleEditProfileClick
    , onAddPlace: handleAddPlaceClick, onCardClick: handleCardClick};
  const formName = {avatar: avatarProp, profile: profileProp, card: cardProp, confirm: confirmProp};
  return (
    <div className="page">
      <Header />
      <Main clickHandlers={clickHandlers} formName={formName} onClose={closeAllPopups} />
      <Footer />
      <PopupWithFormInput name={avatarProp} title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
        btnCaption={captionProfileButton} inputFields={avatarInputs}
      />
      <PopupWithFormInput name={profileProp} title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
        btnCaption={captionProfileButton} inputFields={profileInputs}
      />
      <PopupWithFormInput name={cardProp} title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
        btnCaption={captionCardButton} inputFields={cardInputs}
      />
      <PopupWithForm name={confirmProp} title="Вы уверены?" onClose={closeAllPopups} btnCaption={captionConfirmButton} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <template className="card-template">
        <li className="table__cell">
          <button type="button" className="table__trash"></button>
          <img className="table__image table__area-image" src="./../images/table/table_01_carachaevsk.jpg" alt="Карачаевск" />
          <h2 className="table__title table__area-title">Карачаевск</h2>
          <div className="table__like table__area-like">
            <button type="button" className="table__icon"></button>
            <p className="table__liken">0</p>
          </div>
        </li>
      </template>
    </div>
  );

  function handleEditAvatarClick(evt, setOpen_flag = true) {
    setAvatarOpen(setOpen_flag);
  }

  function handleEditProfileClick (evt, setOpen_flag = true) {
    setProfileOpen(setOpen_flag);
  }
  
  function handleAddPlaceClick (evt, setOpen_flag = true) {
    setAddCardOpen(setOpen_flag);
  }

  function handleCardClick(evt, setOpen_flag = true, card) {
    if (setOpen_flag) {
      card.openClass = popupActiveClass; card.clickHandler = clickHandlers.onCardClick;
      document.addEventListener('keydown', closeAllPopups);
      setCardOpen(card);
    } else {
      setCardOpen(null);
      document.removeEventListener('keydown', closeAllPopups)
    }
    // alert(`${card.name} / ${card.link} / ${card.likes.length} ${card.openClass}`)
  }

  function closeAllPopups(evt) {
    if ((evt.target == evt.currentTarget) || evt.key == "Escape") Object.keys(clickHandlers).forEach(handler => 
      clickHandlers[handler](evt, false)
    );
  }
}

export default App;

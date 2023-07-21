// import './App.css';
import React, { useState } from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
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
    <div>
      <Header />
      <Main clickHandlers={clickHandlers} formName={formName} onClose={closeAllPopups} />
      <Footer />
      <PopupWithForm name={avatarProp} title="Обновить аватар" isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups} btnCaption={captionProfileButton} children={avatarInputs}
      />
      <PopupWithForm name={profileProp} title="Редактировать профиль" isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups} btnCaption={captionProfileButton} children={profileInputs}
      />
      <PopupWithForm name={cardProp} title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
        btnCaption={captionCardButton} children={cardInputs}
      />
      <PopupWithForm name={confirmProp} title="Вы уверены?" onClose={closeAllPopups} btnCaption={captionConfirmButton} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} openClass={popupActiveClass} />
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
      document.addEventListener('keydown', closeAllPopups);
      setCardOpen(card);
    } else {
      setCardOpen(null);
      document.removeEventListener('keydown', closeAllPopups)
    }
  }

  function closeAllPopups(evt) {
    if ((evt.target === evt.currentTarget) || evt.key === "Escape") Object.keys(clickHandlers).forEach(handler => 
      clickHandlers[handler](evt, false)
    );
  }
}

export default App;

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
        onClose={closeAllPopups} btnCaption={captionProfileButton}>
        <input className="popup__input popup__input_validated" type="url" name="avatarlink" placeholder="Ссылка на аватар" required />
        <span className="popup__error-msg popup__error-msg_type_avatarlink"></span>
      </PopupWithForm>
      <PopupWithForm name={profileProp} title="Редактировать профиль" isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups} btnCaption={captionProfileButton}>
        <input className="popup__input popup__input_validated" type="text"name="profilename" placeholder="Имя" minLength="2" maxLength="40" required />
        <span className="popup__error-msg popup__error-msg_type_profilename"></span>
        <input className="popup__input popup__input_validated" type="text"name="profilabout" placeholder="О себе" minLength="2" maxLength="200" required />
        <span className="popup__error-msg popup__error-msg_type_profilabout"></span>
      </PopupWithForm>
      <PopupWithForm name={cardProp} title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
        btnCaption={captionCardButton}>
        <input className="popup__input popup__input_validated" type="text" name="cardname" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__error-msg popup__error-msg_type_cardname"></span>
        <input className="popup__input popup__input_validated" type="url" name="cardlink" placeholder="Ссылка на картиннку" required />
        <span className="popup__error-msg popup__error-msg_type_cardlink"></span>
      </PopupWithForm>
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
/*
  function inputItems (inputFields) {
    const inputs = inputFields.map((input, i) => <> { (input.minlen && input.maxlen)
      ?
        <input key={`inputlen_${String(i)}_${input.num}`} className="popup__input popup__input_validated" type={input.type}
          name={input.name} placeholder={input.placeholder} minLength={input.minlen} maxLength={input.maxlen}
        required />
      : 
        <input key={`input_${String(i)}_${input.num}`} className="popup__input popup__input_validated" type={input.type}
          name={input.name} placeholder={input.placeholder}
        required />
      }
        <span key={`span_${String(i)}_${input.num}`} className={`popup__error-msg popup__error-msg_type_${input.name}`}></span>
      </>
    );
    return (inputs);
  }*/
}

export default App;

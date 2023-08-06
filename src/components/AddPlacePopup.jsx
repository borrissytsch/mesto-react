import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm.js'
import {cardProp} from '../utils/constants.js';
export default function AddPlacePopup ({isOpen, onClose, onAddPlace, ...frmFields}) {
  const refName = useRef('');
  const refLink = useRef('');
  return (
    <PopupWithForm name={cardProp} title="Новое место" isOpen={isOpen} onClose={onClose}
      onSubmit={evt => onAddPlace(evt, {name: refName.current.value, link: refLink.current.value})}
      btnCaption={frmFields.btnCaption}>
      <input ref={refName} className="popup__input popup__input_validated" type="text" name="cardname" placeholder="Название" minLength="2" maxLength="30" required />
      <span className="popup__error-msg popup__error-msg_type_cardname"></span>
      <input ref={refLink} className="popup__input popup__input_validated" type="url" name="cardlink" placeholder="Ссылка на картиннку" required />
      <span className="popup__error-msg popup__error-msg_type_cardlink"></span>
    </PopupWithForm>
  )
}
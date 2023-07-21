import {popupActiveClass} from '../utils/constants.js'
function PopupWithForm({name, title, isOpen, onClose, ...frmFields}) {
  return (
    <div className={`popup popup_type_form popup_type_${name} ${isOpen ? popupActiveClass : ''}`} onClick={onClose}>
      <div className="popup__container popup__container_type_form" onKeyDown={onClose}>
        <button type="button" className="popup__close" form={name} onClick={onClose}></button>
        <div className="popup__form">
          <h2 className="popup__title">{title}</h2>
          <form className="popup__items" id={name} name={`${name}_frm`} noValidate>
            {frmFields.children && inputItems(frmFields.children)}
            <button type="submit" className="popup__save">{frmFields.btnCaption}</button>
          </form>
        </div>
      </div>
    </div>    
  );

  function inputItems (inputFields) {
    return (Object.keys(inputFields)[0] === '0' ? inputFields.map((input, i) => <fieldset
      key={`fields_${String(i)}`} style={{padding: 0, border: 0, outline: 0}}> { (input.minlen && input.maxlen)
      ?
        <input className="popup__input popup__input_validated" type={input.type}
          name={input.name} placeholder={input.placeholder} minLength={input.minlen} maxLength={input.maxlen}
        required />
      : 
        <input className="popup__input popup__input_validated" type={input.type}
          name={input.name} placeholder={input.placeholder}
        required />
      }
        <span className={`popup__error-msg popup__error-msg_type_${input.name}`}></span>
      </fieldset>
    ) : (
      <>{inputFields}</>
    ));
  }
}

export default PopupWithForm;
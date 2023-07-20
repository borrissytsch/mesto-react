import {popupActiveClass} from '../utils/constants.js'
function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_form popup_type_${props.name} ${props.isOpen ? popupActiveClass : ''}`} onClick={props.onClose}>
      <div className="popup__container popup__container_type_form" onKeyDown={props.onClose}>
        <button type="button" className="popup__close" form={props.name} onClick={props.onClose}></button>
        <div className="popup__form">
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__items" id={props.name} name={`${props.name}_frm`} noValidate>
            {props.children}
            <button type="submit" className="popup__save">{props.btnCaption}</button>
          </form>
        </div>
      </div>
    </div>    
  );
}

export default PopupWithForm;
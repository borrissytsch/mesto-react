function ImagePopup(props) {
  return (
    <div className={`popup popup_type_picture ${props.card ? props.card.openClass : ''}`} onClick={props.onClose}>
      <div className="popup__container popup__container_type_picture">
        <button type="button" className="popup__close" onClick={props.onClose}></button>
        <div className="popup__picture">
          <img className="popup__image" src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''} />
          <p className="popup__caption">{props.card ? props.card.name : ''}</p>
        </div>
      </div>
    </div>
  );
}
  
export default ImagePopup;
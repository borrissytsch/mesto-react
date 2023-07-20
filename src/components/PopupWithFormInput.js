import PopupWithForm from './PopupWithForm.js'
function PopupWithFormInput(props) {
  const inputItems = props.inputFields.map((input) => <>
    {(input.minlen && input.maxlen) ?
      <input key={`inputlen_${input.key}`} className="popup__input popup__input_validated" type={input.type} name={input.name}
        placeholder={input.placeholder} minLength={input.minlen} maxLength={input.maxlen}
      required />
    : <input key={`input_${input.key}`} className="popup__input popup__input_validated" type={input.type} name={input.name}
        placeholder={input.placeholder}
      required />
    }
      <span key={`span_${input.key}`} className={`popup__error-msg popup__error-msg_type_${input.name}`}></span>
    </>
  );
  return (
    <PopupWithForm name={props.name} title={props.title} isOpen={props.isOpen} onClose={props.onClose} btnCaption={props.btnCaption}>
      {inputItems}
    </PopupWithForm>
  );
}
  
export default PopupWithFormInput;
export default function Card(props) {
  return (
    <li className="table__cell" onClick={handleClick}>
    <button type="button" className="table__trash"></button>
    <img className="table__image table__area-image" src={props.card.link} alt={props.card.name} />
    <h2 className="table__title table__area-title">{props.card.name}</h2>
    <div className="table__like table__area-like">
    <button type="button" className="table__icon"></button>
    <p className="table__liken">{props.card.likes.length ? props.card.likes.length : 0}</p>
    </div>
    </li>
  );

  function handleClick(evt) {
    props.onCardClick(evt, undefined, props.card);
  }
}

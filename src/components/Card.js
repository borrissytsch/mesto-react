export default function Card({card, onCardClick}) {
  return (
    <li className="table__cell" onClick={handleClick}>
      <button type="button" className="table__trash"></button>
      <img className="table__image table__area-image" src={card.link} alt={card.name} />
      <h2 className="table__title table__area-title">{card.name}</h2>
      <div className="table__like table__area-like">
        <button type="button" className="table__icon"></button>
        <p className="table__liken">{card.likes.length ? card.likes.length : 0}</p>
      </div>
    </li>
  );

  function handleClick(evt) {
    onCardClick(evt, undefined, card);
  }
}

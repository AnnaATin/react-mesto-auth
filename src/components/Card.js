import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((item) => item._id === currentUser._id);
  const cardDeleteButtonClassName = `elements__remove-button ${
    isOwn ? "" : "elements__remove-button_invalid"
  }`;
  const cardLikeButtonClassName = `elements__like-button ${
    isLiked ? "elements__like-button_active" : ""
  }`;

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <article className="elements__grid-item">
      <img
        src={props.card.link}
        alt={props.card.name}
        className="elements__grid-image"
        onClick={handleCardClick}
      />
      <div className="elements__grid-text-area">
        <h2 className="elements__grid-text">{props.card.name}</h2>
        <div className="elements__like-area">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p className="elements__like-count">{props.card.likes.length}</p>
        </div>
      </div>
      <button
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
    </article>
  );
}

export default Card;

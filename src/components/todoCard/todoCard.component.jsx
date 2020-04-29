import React from "react";

const TodoCard = ({
  id,
  description,
  handleEvent,
  createdAt,
  type,
  children,
}) => {
  return (
    <li key={id} onClick={(e) => handleEvent(e)}>
      <h3>{description}</h3>
      <p data-type={type[0]} data-id={id}>
        {children[0]}
      </p>
      <p data-type={type[1]} data-id={id}>
        {children[1]}
      </p>
      <p>{createdAt}</p>
    </li>
  );
};

export default TodoCard;

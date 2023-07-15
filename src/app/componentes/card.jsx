import React from "react";

function Card(props) {
  return (
    <div>
      <h2>
        {props.nome}
        <br></br>
        {props.email}
        <br></br>
        {props.telefone}
      </h2>
    </div>
  );
}

export default Card;

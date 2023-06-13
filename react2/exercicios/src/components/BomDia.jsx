/* eslint-disable import/no-anonymous-default-export */
import React from "react";

// export default props => (
//   <React.Fragment>
//     <h1>Bom dia, {props.nome}! </h1>
//     <h2>Sua idade é {props.idade}</h2>
//   </ React.Fragment>
// );

// export default props => (
//   <React.Fragment>
//     <h1>Bom dia, {props.nome}! </h1>
//     <h2>Sua idade é {props.idade}</h2>
//   </ React.Fragment>
// );

export default props => (
  <div>
    <h1>Bom dia, {props.nome}! </h1>
    <h2>Sua idade é {props.idade}</h2>
  </ div>
);

// export default (props) => [
//   <h1 key='greetName'>Bom dia, {props.nome}! </h1>,
//   <h2 key='age'>Sua idade é {props.idade}</h2>,
// ];

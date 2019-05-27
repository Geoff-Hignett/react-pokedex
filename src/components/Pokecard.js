import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const props = this.props;
    let imgSrc = `${POKE_API}${padToThree(props.id)}.png`;
    return (
      <div class="Pokecard">
        <h1>{props.name}</h1>
        <img src={imgSrc} />
        <div>Type: {props.type}</div>
        <div>EXP: {props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;

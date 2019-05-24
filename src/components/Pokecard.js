import React, { Component } from 'react';
const POKE_API =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
  render() {
    const props = this.props;
    let imgSrc = `${POKE_API}${props.id}.png`;
    return (
      <div>
        <p>{props.name}</p>
        <img src={imgSrc} />
      </div>
    );
  }
}

export default Pokecard;

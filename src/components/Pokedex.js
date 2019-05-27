import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const props = this.props;
    let title;
    if (props.isWinner) {
      title = <h1 className="pokedexWinner">Winner</h1>;
    } else {
      title = <h1 className="pokedexLoser">Loser</h1>;
    }
    return (
      <div className="pokedex">
        <p>{title}</p>
        <p>Total Exp: {props.exp}</p>
        <div className="pokedexCards">
          {props.pokemon.map(p => (
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;

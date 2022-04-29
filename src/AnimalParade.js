import React from 'react';
import AnimalEmoji from './AnimalEmoji';

export default function Parade({ animals }) {
  return (
    <div className="traffic">
      {animals.map((animal, index) => (
        <AnimalEmoji animals={animal} key={animal + index} animal={animal} />
      ))}
    </div>
  );
}

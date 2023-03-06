import { useState } from 'react';
import dice0 from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

function Dice() {
  const [points, setPoints] = useState(0);

  const diceSides = new Map([
    [0, dice0],
    [1, dice1],
    [2, dice2],
    [3, dice3],
    [4, dice4],
    [5, dice5],
    [6, dice6],
  ]);

  const handleDiceClick = () => {
    const randomPoints = Math.ceil(Math.random() * 6);
    setPoints(randomPoints);
  };

  return (
    <div>
      <h1>Dice</h1>
      <img
        src={diceSides.get(points)}
        alt={`A dice with ${points}`}
        width={100}
        onClick={handleDiceClick}
      />
    </div>
  );
}

export default Dice;

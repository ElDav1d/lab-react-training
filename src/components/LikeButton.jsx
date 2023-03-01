import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);
  const [backgroundColor, setbackgroundColor] = useState('grey');

  const ButtonStyles = {
    backgroundColor: `${backgroundColor}`,
    border: 'none',
    color: 'white',
    padding: '1rem',
  };

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
  };

  const handleCount = () => {
    setbackgroundColor(getRandomColor());
    setCount(count + 1);
  };

  return (
    <div>
      <h1>LikeButton</h1>
      <button style={ButtonStyles} onClick={handleCount}>
        {count} LIKES
      </button>
    </div>
  );
}

export default LikeButton;

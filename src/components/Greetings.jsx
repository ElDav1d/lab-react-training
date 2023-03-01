import React from 'react';

function Greetings({ language, children }) {
  const greets = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  return (
    <p>
      {greets[language]}: <span>{children}</span>
    </p>
  );
}

export default Greetings;

import React from 'react';

function IdCard(data) {
  const { lastName, firstName, gender, height, birth, img } = data.cardData;

  const containerStyles = {
    display: 'flex',
    padding: '10px',
    border: '1px solid black',
    marginBottom: '10px',
  };

  const imgStyles = {
    height: '150px',
    marginRight: '10px',
  };

  const textStyles = {
    marginTop: '0',
    marginBottom: '5px',
  };

  return (
    <div style={containerStyles}>
      <img style={imgStyles} src={img} alt={`picture of ${firstName}`} />
      <div>
        <p style={textStyles}>
          <b>Fist name</b>: {firstName}
        </p>
        <p style={textStyles}>
          <b>Last name</b>: {lastName}
        </p>
        <p style={textStyles}>
          <b>Gender</b>: {gender}
        </p>
        <p style={textStyles}>
          <b>Height</b>: {height}
        </p>
        <p style={textStyles}>
          <b>Birth</b>: {birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;

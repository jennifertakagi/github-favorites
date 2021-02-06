import React from 'react';

import './styles.css';

function Input({ id, name, placeholder, onChange, type, value }) {
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
}

export default Input;

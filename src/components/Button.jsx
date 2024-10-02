// src/components/Button.js

import React from 'react';

const Button = ({ label }) => {
  return (
    <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {label}
    </button>
  );
};

export default Button;

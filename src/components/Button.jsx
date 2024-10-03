// src/components/Button.js

import React from 'react';

const Button = ({ label, bgColor }) => {
  const backgroundColor = bgColor;

  return (
    <button style={{
      backgroundColor: bgColor
    }} className={`text-white font-semibold py-2 px-4 rounded-xl px-8 py-2 shadow-[3px_3px_#85ebd9] hover:shadow-[5px_5px_#85ebd9]
    ease-in-out duration-300 hover:translate-y-[-2px] hover:translate-x-[-2px]`}>
      {label}
    </button>
  );
};

export default Button;


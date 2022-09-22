import React from 'react';

const Button = ({ children, trigger }) => {
  const handleClick = () => {
    if (children === 'Increment') {
      trigger((prev) => prev + 1);
    }
    if (children === 'Decrement') {
      trigger((prev) => prev - 1);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default Button;

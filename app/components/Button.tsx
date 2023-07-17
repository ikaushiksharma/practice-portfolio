import React from 'react';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const Button = ({ children, type, onClick }: Props) => {
  return (
    <button
      className="gradient-primary capitalize px-4 py-2"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

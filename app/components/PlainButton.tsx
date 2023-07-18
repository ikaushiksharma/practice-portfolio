import React from 'react';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  classes?: string;
};

export const PlainButton = ({ children, type, onClick, classes }: Props) => {
  return (
    <button
      className={`capitalize px-4 py-3 flex w-fit gap-x-4 ${classes}`}
      type={type}
      onClick={onClick}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </button>
  );
};

export default PlainButton;

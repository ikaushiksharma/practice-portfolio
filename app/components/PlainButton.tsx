import React from 'react';
import Link from 'next/link';
type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  classes?: string;
  small?: boolean;
  link?: string;
};

export const PlainButton = ({
  children,
  type,
  onClick,
  link,
  classes,
  small,
}: Props) => {
  return (
    <Link href={link || '/'}>
      <button
        className={`capitalize ${
          small ? 'px-2 py-1 gap-x-2 text-sm' : 'px-4 py-3 gap-x-4'
        } flex items-center w-fit ${classes}`}
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
          className={`${small ? 'w-4 h-4' : 'w-6 h-6'}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </button>
    </Link>
  );
};

export default PlainButton;

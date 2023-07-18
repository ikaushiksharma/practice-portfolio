import React from 'react';

type Props = {
  text: string;
};

const BulletPoint = ({ text }: Props) => {
  return (
    <div className="flex items-center w-1/2 space-x-2">
      <div className="text-tertiary bg-white rounded-full aspect-square text-[8px] sm:text-xs xxl:text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#825AE2"
          className="w-4 h-4 xxl:w-6 xxl:h-6"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default BulletPoint;

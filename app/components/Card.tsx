import React from 'react';

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="w-56 h-64 flex px-4 items-center justify-evenly flex-col rounded-lg shadow-lg bg-tertiary">
      <div className="bg-secondary/20 relative w-32 h-32 overflow-hidden rounded-full">
        <img className="h-28 absolute bottom-0" src="./dummyPng.png" alt="" />
      </div>
      <h1 className="text-sm font-bold">Engaging ClassRoom</h1>
      <p className="text-xs text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
        veritatis aspernatur
      </p>
    </div>
  );
};

export default Card;


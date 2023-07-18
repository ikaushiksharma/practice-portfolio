import React from 'react';

type Props = {
  children: React.ReactNode;
  id: string;
};

export default function Tag({ children, id }: Props) {
  return (
    <div
      id={id}
      className="px-4 py-2 border w-fit border-tertiary rounded-full"
    >
      {children}
    </div>
  );
}

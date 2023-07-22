import React from 'react';
type InputProps = {
  type: string;
  placeholder: string;
  register: any;
  name: string;
  required: boolean;
  handleError: (name: string) => void;
};
const Input = ({
  type,
  placeholder,
  register,
  name,
  required,
  handleError,
}: InputProps) => {
  return (
    <div className="relative flex py-2 px-1 w-full transition-all duration-500 ease-in-out text-zinc-700 border-b-2 border-primary">
      {type === 'message' ? (
        <textarea
          onInvalid={(e) => {
            e.preventDefault();
            handleError(name);
          }}
          rows={5}
          type={type}
          id={name}
          placeholder={placeholder}
          {...register(name, { required })}
          className="py-2 text-xs font-bold w-full resize-none placeholder:uppercase placeholder:text-zinc-700 transition-all duration-500 ease-in-out outline-none  focus:placeholder:text-gray-500 rounded-md text-primary"
        />
      ) : (
        <input
          onInvalid={(e) => {
            e.preventDefault();
            handleError(name);
          }}
          type={type}
          id={name}
          placeholder={placeholder}
          {...register(name, { required })}
          className="py-2 text-xs font-bold w-full sm:w-4/5 placeholder:uppercase placeholder:text-zinc-700 outline-none focus:placeholder:text-gray-500 rounded-md text-primary"
        />
      )}
    </div>
  );
};

export default Input;

import React from 'react';
type InputProps = {
  type: string;
  placeholder: string;
  icon: React.ReactNode;
  register: any;
  name: string;
  required: boolean;
  handleError: (name: string) => void;
};
const Input = ({
  type,
  placeholder,
  icon,
  register,
  name,
  required,
  handleError,
}: InputProps) => {
  return (
    <div className="relative flex z-50 py-2 px-1 w-full transition-all duration-500 ease-in-out text-zinc-700 focus-within:text-white">
      {type === 'message' ? (
        <div className="flex w-full h-full">
          <span className="absolute pointer-events-none top-4 left-2 sm:left-0 pl-1 sm:pl-3 flex items-center">
            {icon}
          </span>
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
            className="pl-10 pr-3 py-2 resize-none text-sm w-full sm:w-[90%] md:text-base placeholder:text-zinc-700 transition-all duration-500 ease-in-out hover:bg-zinc-900 outline-none  focus:placeholder:text-gray-200 rounded-md ring-zinc-600 ring-1 focus:ring-zinc-400 bg-transparent text-white"
          />
        </div>
      ) : (
        <div className="flex w-full h-full">
          <span className="absolute pointer-events-none inset-y-0 left-2 sm:left-0 pl-1 sm:pl-3 flex items-center">
            {icon}
          </span>
          <input
            onInvalid={(e) => {
              e.preventDefault();
              handleError(name);
            }}
            type={type}
            id={name}
            placeholder={placeholder}
            {...register(name, { required })}
            className="pl-10 pr-3 py-2 text-sm w-full sm:w-[90%] md:text-base placeholder:text-zinc-700 transition-all duration-500 ease-in-out hover:bg-zinc-900 outline-none  focus:placeholder:text-gray-200 rounded-md ring-zinc-600 ring-1 focus:ring-zinc-400 bg-transparent text-white"
          />
        </div>
      )}
    </div>
  );
};

export default Input;

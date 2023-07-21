'use client';
import Toast from '@/utils/notification';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';

type Props = {};

const Form = (props: Props) => {
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = async (data: any) => {
    const toast = new Toast('Loading...');
    let response = await axios.post('/api/contact', data);
    const { status, message } = response.data;
    reset();
    if (status === false) {
      toast.error('Some Error Occured!');
      return;
    } else {
      toast.success('Success!');
    }
  };

  const onError = (name: string) => {
    const toast = new Toast('Loading...');
    toast.error(`${name.charAt(0).toUpperCase() + name.slice(1)} is invalid`);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        placeholder="Full Name"
        name="name"
        register={register}
        required
        handleError={onError}
        icon={
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.75 19v-2.75a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2V19m-3-11a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z"
              stroke="currentColor"
              strokeWidth="1.5"
            ></path>
          </svg>
        }
      />
      <Label htmlFor="email">Email</Label>
      <Input
        handleError={onError}
        icon={
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 6.75h13.5v10.5H5.25V6.75Z"
              stroke="currentColor"
              strokeWidth="1.5"
            ></path>
            <path
              d="M5.25 6.75 12 12l6.75-5.25"
              stroke="currentColor"
              strokeWidth="1.5"
            ></path>
          </svg>
        }
        type="email"
        register={register}
        required
        name="email"
        placeholder="Email Address"
      />
      <Label htmlFor="message">Message</Label>
      <Input
        handleError={onError}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10.5a8.25 8.25 0 0 1-16.5 0C4.5 5.7 7.6 3 12 3s7.5 2.7 7.5 7.5z" />
            <path d="M12 18l-4.5-4.5h9L12 18z" />
          </svg>
        }
        type="message"
        register={register}
        required
        name="message"
        placeholder="Write your message here"
      />
      <div className="px-1">
        <button
          type="submit"
          value="submit"
          className="bg-zinc-800 backdrop-blur-lg z-20 relative w-full sm:w-[90%] hover:bg-zinc-500 transition-all duration-500 ease-in-out mt-3 rounded-md text-gray-200 p-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
};

const Label = ({ htmlFor, children }: LabelProps) => {
  return (
    <label className="text-sm sm:text-base px-2 py-4" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Form;

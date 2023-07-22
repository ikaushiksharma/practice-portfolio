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
    console.log(data);
    const toast = new Toast('Loading...');
    let response = await axios.post('/api/contact', data);
    const { status, message } = response.data;
    console.log(status, message);
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
    <form
      className="w-full sm:w-4/5 p-5 sm:p-10 bg-secondary"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-xl pb-4 sm:pb-8 uppercase font-bold text-primary">
        any project?
      </h1>
      <div className="flex flex-col md:flex-row w-full justify-between md:space-x-4">
        <Input
          type="text"
          placeholder="Name"
          name="name"
          register={register}
          required
          handleError={onError}
        />
        <Input
          handleError={onError}
          type="email"
          register={register}
          required
          name="email"
          placeholder="Email Address"
        />
      </div>
      <Input
        handleError={onError}
        type="message"
        register={register}
        required
        name="message"
        placeholder="message"
      />
      <div className="pt-6 sm:pt-10">
        <button
          className="capitalize px-2 max-sm:text-sm sm:px-3 py-1.5 sm:py-2 gap-x-2 sm:gap-x-3 flex items-center w-fit bg-tertiary text-secondary hover:scale-95 transition-all"
          type="submit"
        >
          Submit Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 sm:w-6 sm:h-6 text-tertiary bg-secondary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Form;

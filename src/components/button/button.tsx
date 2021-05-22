import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
        props.className || ''
      }`}
    />
  );
};

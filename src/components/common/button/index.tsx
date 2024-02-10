import React from 'react';

export interface Props {
  onClick: () => void;
  label: string;
  primary?: boolean; // Add primary prop
}

export const Button = ({
  onClick,
  label,
  primary = false, // Set default value for primary prop
}: Props) => (
  <button
    type="button"
    onClick={onClick}
    className={`${
      primary ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-300 hover:bg-gray-400'
    } text-white font-bold py-2 px-4 rounded`}
  >
    {label}
  </button>
);

export default Button;

import React, { InputHTMLAttributes } from 'react';

interface KGInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string | number | undefined  | string[];
}

const KGInput: React.FC<KGInputProps> = (props) => {
  return (
    <input
      className="bg-gray-50 border  focus:outline-zinc-600 border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
      {...props}
    />
  );
};

export default KGInput;

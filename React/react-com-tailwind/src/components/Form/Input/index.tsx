import React from "react";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ onChange, value, type, placeholder, required = false }) => {
  return (
    <input
      className='inputs'
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  )
}

export default Input
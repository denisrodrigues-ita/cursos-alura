import React, { useState } from 'react';
import Input from './Input';

interface FormProps {
  handleUser: (data: { name: string; password: string }) => void;
}

const Form: React.FC<FormProps> = ({ handleUser }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const safeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const data = {
      name: name,
      password: password
    };
    handleUser(data);
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-full h-full -my-20 gap-10 mx-auto"
      onSubmit={safeSubmit}>
      <Input
        onChange={(event) => setName(event.target.value)}
        value={name}
        placeholder="Enter your name"
        type="text"
        required
      />

      <Input
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
        placeholder="Enter your password"
        required
      />

      <button
        className='btn'
        type="submit">Seguir</button>
    </form>
  );
};

export default Form;

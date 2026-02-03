import { useState } from 'react';

const Input = () => {
  const [value, setValue] = useState('');

  console.log(value)

  return <input type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Type a command (e.g forward)' className='border px-3 py-2 rounded' />;
};

export default Input;

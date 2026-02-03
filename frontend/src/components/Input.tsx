import { useState } from 'react';
import { Icon } from '@iconify/react';

const Input = () => {
  const [value, setValue] = useState('');

  return (
    <div className='relative'>
      <input type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Type a command (e.g forward)' className='border px-3 py-2 rounded w-full' />
      <button className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-60'>
        <Icon icon='material-symbols:send' width='24' height='24' />
      </button>
    </div>
  );
};

export default Input;

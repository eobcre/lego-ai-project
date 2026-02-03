type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div>
      <button type='button' onClick={onClick} className='text-white bg-[#387EEF] hover:opacity-80 border rounded-md cursor-pointer p-2 w-30'>
        {label}
      </button>
    </div>
  );
};

export default Button;

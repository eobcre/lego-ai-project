import Button from './Button';

const buttonLabels = ['Forward', 'Backward', 'Stop'];

const Buttons = () => {
  return (
    <div className='flex'>
      <div className='flex gap-20'>
        {buttonLabels.map((label, index) => (
          <div key={index} className=''>
            <Button label={label} onClick={() => {}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buttons;

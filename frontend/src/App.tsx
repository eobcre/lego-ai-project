import Buttons from './components/Buttons';
import Input from './components/Input';

const App = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='flex flex-col gap-8'>
        <Buttons />
        <Input />
      </div>
    </div>
  );
};

export default App;

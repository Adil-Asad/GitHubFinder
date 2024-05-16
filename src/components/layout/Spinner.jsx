import spin from '../layout/assets/spin.gif';
function Spinner() {
  return (
    <div className='flex items-center justify-center'>
      <img src={spin} alt='loading...' className=' w-60 ' />
    </div>
  );
}

export default Spinner;

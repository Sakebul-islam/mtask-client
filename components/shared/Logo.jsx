import mtask from '../../assets/logo.png'

const Logo = () => {
  return (
    <div className='flex justify-center items-center max-w-[150px] select-none'>
      <img className='max-h-[70px]' src={mtask} alt='MTask' />
      <h1 className='text-3xl font-bold font-dosis -ml-2'>MTask</h1>
    </div>
  );
}

export default Logo
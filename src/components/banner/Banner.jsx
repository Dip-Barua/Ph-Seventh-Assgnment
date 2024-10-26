import banner from '../../assets/banner.png';
import './banner.css';

export default function Banner( {addCoins} ) {
  return (
    <div className='flex justify-between w-11/12 mx-auto my-16 text-center'>
      <div className="bg-banner w-full rounded-3xl"> 
        <img src={banner} className='mx-auto w-2/12 h-4/12 mt-[10rem]' alt="" />
        <h1 className='font-bold my-16'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <h2 className='text-slate-300 font-bold text-4xl my-8'>Beyond Boundaries Beyond Limits</h2>
        <button onClick={addCoins} className='btn my-12 py-3 rounded-2xl text-Black text-2xl font-extrabold bg-[#E7FE29] border-8 border-black shadow-[0_0_0_4px_#E7FE29] p-2"'>
          Claim Free Credit</button>
      </div>
    </div>
  );
}

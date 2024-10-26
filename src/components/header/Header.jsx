import logo from '../../assets/logo.png';
import coin from '../../assets/coin.png';
import './header.css';

export default function Header({ coins }) {
  return (
<div className='sticky top-0 z-10 backdrop-blur-md  '>
        <div className='flex justify-between w-11/12 mx-auto my-14 text-[#535bf8] '>
            <div><img src={logo} className='w-[7rem] my-auto' alt="" /></div>
            <div className='flex text-2xl items-center justify-around w-6/12'>
              
            <div><p><a href="">Home</a></p></div>
            <div><p><a href="">Fixture</a></p></div>
            <div><p><a href="">Teams</a></p></div>
            <div><p><a href="">Schedules</a></p></div>
            <div className='px-6 py-2 flex font-bold items-center gap-3 text-stone-950 rounded-2xl border-2 border-slate-400'> <span>{coins}</span> Coin<img src={coin} className='w-[2.8rem]' alt="" /></div>
            </div>
        </div>
</div>


















  )
}

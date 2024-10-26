import React from 'react';

export default function Player({ player, onSelect }) {
  return (
    <>
      <div className="card bg-base-100 w-[70%] shadow-xl rounded-2xl p-3 mx-auto">
        <figure>
          <img
            src={player.image}
            alt={player.name} 
            className='w-full h-80 object-cover rounded-2xl mb-5' 
          />
        </figure>
        <div className="card-body">
          <div className="avatar flex">
            <div className="w-14 rounded-full items-center ">
              <img className='h-10 w-10 covers rounded-full ' src={player.image} />
            </div>
            <div>
              <h2 className="card-title font-bold items-center text-center">{player.name}</h2>
            </div> 
          </div>

          <div className="flex justify-around py-2 items-center">
            <div className="items-center">
              <h2 className="card-title items-center text-gray-500">
                <span className='text-black font-bold'>Country:</span> {player.country}
              </h2>
            </div>
            <div>
              <h2 className="card-title items-center text-center px-4 py-1 rounded-xl bg-slate-100 border-gray-100">{player.role}</h2>
            </div> 
          </div>
          <hr />
          <h3 className='font-bold py-2'>Rating</h3>

          <div className='flex justify-between w-11/12 mx-auto py-2'>
            <div className="">{player.battingType}</div>
            <div className="">{player.bowlingType}</div>
          </div>
          <div className="card-actions flex justify-between my-5 w-11/12 mx-auto">
            <div>    
              <h3 className='font-bold py-2'>Price: <span className='text-slate-600'>{player.biddingPrice}</span></h3>
            </div>
            <div>     
              <button 
                className="btn py-2 rounded-xl text-Black text-md font-bold bg-[#E7FE29]" 
                onClick={() => onSelect(player)}
              >
                Choose Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Player from './../Player/Player';

export default function Players({ players = [], selectPlayer }) {
  return (
    <div className='w-11/12 mx-auto'>
      <div className='grid grid-cols-3 grid-rows-4 gap-16 mx-auto w-full justify-between my-20'>
        {players.map((player) => (
          <Player key={player.playerId} player={player} onSelect={selectPlayer} /> 
        ))}
      </div>
    </div>
  );
}

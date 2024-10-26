import logo from '../../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SelectedPlayer({
  selectedPlayers,
  setSelectedPlayers,
})

// Remove player functionality
{
  const handleRemovePlayer = (playerId) => {
    const player = selectedPlayers.find((p) => p.playerId === playerId);

    if (player) {
      toast.error(`${player.name} successfully removed from your squad.`);
    }
    setSelectedPlayers((prevSelected) =>
      prevSelected.filter((player) => player.playerId !== playerId)
    );
  };

  return (
    <div className="grid grid-cols-1 gap-4 w-9/12 mx-auto mb-28">
      {selectedPlayers.length > 0 ? (
        selectedPlayers.map((player) => (
          <div key={player.playerId} className="card rounded-2xl bg-base-100 shadow-xl p-3">
            <div className="card-body p-5 flex justify-between">
              <div className="flex gap-5 justify-center">
                <div>
                  <img
                    src={player.image}
                    alt={player.name}
                    className="h-24 w-24 rounded-xl object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-xl">{player.name}</h2>
                  <p className="text-lg">Role: {player.role}</p>
                  <p className="text-lg">Batting & Bowling Style: {player.battingType} || {player.bowlingType}</p>
                </div>
              </div>

              <div>
                <button
                  className="btn mt-2 bg-red-500 text-white"
                  onClick={() => handleRemovePlayer(player.playerId)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='flex mx-auto justify-center my-10 mt-[8%]'>
          <img src={logo} className='w-[9rem] my-auto' alt="" />
        </div>
      )}
    </div>
  );
}

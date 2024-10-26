import Players from "../header/Players/Players";
import SelectedPlayers from "../SelectedPlayer/SelectedPlayer";
import logo from '../../assets/logo.png';

export default function Main({ isActive, toggleButton, players, selectPlayer, selectedPlayers, setSelectedPlayers }) {
  return (
    <>
      <div className="flex items-center w-10/12 justify-between mx-auto sticky top-16 z-10">
        <div>
          <h2 className="text-3xl font-bold">
            {isActive === "Available" ? "Available Players" : `Selected Players: ${selectedPlayers.length}/6`}
          </h2>
        </div>
        <div>
          <button
            onClick={() => {
              toggleButton("Available");
s            }}
            className={`btn my-12 py-3 rounded-xl text-Black text-xl font-bold bg-[#E7FE29] ${
              isActive === "Available" ? 'bg-[#E7FE29] text-gray-700' : 'bg-white border-1 border-gray-200'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => {
              toggleButton("Selected");
            }}
            className={`btn my-12 py-3 rounded-xl text-Black text-xl font-bold bg-[#E7FE29] ${
              isActive === "Selected" ? 'bg-[#E7FE29] text-gray-700' : 'bg-white border-1 border-gray-200'
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {isActive === "Available" && (
        <div>
          <Players players={players} selectPlayer={selectPlayer} />
        </div>
      )}

      {isActive === "Selected" && selectedPlayers.length > 0 && (
        <>
          <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
          <div className="flex w-9/12 mx-auto">
            <div>
              <button
                onClick={() => toggleButton("Available")}
                className={`btn my-12 py-3 rounded-xl text-Black text-xl font-bold bg-[#E7FE29] ${
                  isActive === "Selected" ? 'bg-[#E7FE29] text-gray-700' : 'bg-white border-1 border-gray-200'
                }`}
              >
                Add More Players
              </button>
            </div>
            <div></div>
          </div>
        </>
      )}

      {isActive === "Selected" && selectedPlayers.length === 0 && (
        <div className="flex flex-col mx-auto justify-center items-center my-10 mt-[8%]">
          <div className="mb-4">      
            <img src={logo} className="w-[15rem]" alt="Logo" />
          </div>
          <div className="mb-20"> 
            <h1 className="text-black text-2xl">No Player's been Selected Yet</h1>
          </div>
        </div>
      )}
    </>
  );
}

import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Main from './components/Main/Main';
import { useEffect, useState } from "react";
import NewsLetter from './components/NewsLetter/NewsLetter';
import Footer from './components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [isActive, setIsActive] = useState("Available");
  const [coins, setCoins] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const toggleButton = (button) => {
    setIsActive(button);
  };

  const addCoins = () => {
    setCoins(coins + 8000000);
    toast.success(`8000000 Coin has been added with main balance`);
    
  };

  const selectPlayer = (player) => {
    const playerPrice = player.biddingPrice;
    // Check if the user has enough coins
    if (coins < playerPrice) {
      toast.error("You do not have enough coins to select this player.");
      return;
    }

    // Check if the player is already selected
    const isSelected = selectedPlayers.some((p) => p.playerId === player.playerId);
    if (isSelected) {
      toast.warning("Player is already selected.");
      return;
    }

    // Check if the maximum player limit is reached
    if (selectedPlayers.length >= 6) {
      toast.warning("You can only select a maximum of 6 players.");
      return;
    }

    // reduce coins after confirming the player can be selected
    setCoins(coins - playerPrice);

    // Add the player to the selected players list
    setSelectedPlayers([...selectedPlayers, player]);
    toast.success(` ${player.name} is selected in your squad`);

  };

  useEffect(() => {
    fetch('../../../../public/Players.json')
      .then(res => res.json())
      .then(data => {
        setPlayers(data);
      });
  }, []);

  return (
    <>
      <Header coins={coins}></Header>
      <Banner addCoins={addCoins}></Banner>
      <Main isActive={isActive} 
        players={players} 
        toggleButton={toggleButton} 
        selectPlayer={selectPlayer} 
        selectedPlayers={selectedPlayers} 
        setSelectedPlayers={setSelectedPlayers}
      >
        </Main>
        <NewsLetter></NewsLetter>
      <Footer></Footer>
      <ToastContainer position="top-center"/>
    </>
  );
}

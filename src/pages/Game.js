import React from 'react';
import { useLocation } from 'react-router-dom';

const Game = () => {
	const location = useLocation();
	const gameType = location.state.gameType;
	const isPlayerOneX = location.state.isPlayerOneX;
	console.log(gameType);
	console.log(isPlayerOneX);
	return <div>Game Page</div>;
};

export default Game;

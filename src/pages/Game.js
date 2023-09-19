import React from 'react';
import Grid from '../components/Grid';
import { useGame } from '../contexts/GameContext';

const Game = () => {
	const { currentPlayerTurn } = useGame();

	return (
		<div>
			Game Page
			<br />
			Current Player Turn: {currentPlayerTurn}
			<br />
			<Grid />
		</div>
	);
};

export default Game;

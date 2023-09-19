import React from 'react';
import Grid from '../components/Grid';
import { useGame } from '../contexts/GameContext';
import ResetButton from '../components/ResetButton';
import Score from '../components/Score';

const Game = () => {
	const { currentPlayerTurn } = useGame();

	return (
		<div>
			Game Page
			<br />
			Current Player Turn: {currentPlayerTurn}
			<br />
			<ResetButton />
			<br />
			<br />
			<Grid />
			<br />
			<Score />
		</div>
	);
};

export default Game;

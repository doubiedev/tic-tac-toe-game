import React from 'react';
import Grid from '../components/Grid';
import { useGame } from '../contexts/GameContext';
import ResetButton from '../components/ResetButton';
import Score from '../components/Score';

const Game = () => {
	const { currentPlayerTurn, isWin, isTie } = useGame();

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
			{isWin ? (
				<div>Winner: {currentPlayerTurn}</div>
			) : (
				<div>{isTie && <p>Game Tied</p>}</div>
			)}
		</div>
	);
};

export default Game;

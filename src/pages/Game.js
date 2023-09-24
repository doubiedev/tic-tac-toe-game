import React from 'react';
import Grid from '../components/Grid';
import { useGame } from '../contexts/GameContext';
import ResetButton from '../components/ResetButton';
import Scores from '../components/Scores';
import TurnTracker from '../components/TurnTracker';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Game = () => {
	const { currentPlayerTurn, isWin, isTie } = useGame();

	return (
		<main>
			<div className='game-container'>
				<div className='game-top-wrapper'>
					<Logo />
					<TurnTracker />
					<ResetButton />
				</div>
				<Grid />
				<Scores />
				{isWin ? (
					<div>Winner: {currentPlayerTurn}</div>
				) : (
					<div>{isTie && <p>Game Tied</p>}</div>
				)}
			</div>
		</main>
	);
};

export default Game;

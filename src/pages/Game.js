import React from 'react';
import Grid from '../components/Grid';
import ResetButton from '../components/ResetButton';
import Scores from '../components/Scores';
import TurnTracker from '../components/TurnTracker';
import Banner from '../components/Banner';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Game = () => {
	return (
		<main className='flex'>
			<Banner />
			<div className='game-container flex flex-column'>
				<div className='game-top-wrapper'>
					<Logo />
					<TurnTracker />
					<ResetButton />
				</div>
				<Grid />
				<Scores />
			</div>
		</main>
	);
};

export default Game;

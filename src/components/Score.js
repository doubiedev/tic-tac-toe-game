import React from 'react';
import { useNewGameMenu } from '../contexts/NewGameMenuContext';
import { useGame } from '../contexts/GameContext';

const Score = ({ type }) => {
	const { gameType, isPlayerOneX } = useNewGameMenu();
	const { score } = useGame();
	return (
		<>
			{gameType === 'cpu' && (
				<div className='score'>
					<p className='body'>
						{type.toUpperCase()}
						{isPlayerOneX && type === 'x' && ' (YOU)'}
						{isPlayerOneX && type === 'o' && ' (CPU)'}
						{!isPlayerOneX && type === 'x' && ' (CPU)'}
						{!isPlayerOneX && type === 'o' && ' (YOU)'}
					</p>
					<h2 className='heading-M'>{score[type]}</h2>
				</div>
			)}
			{gameType === 'player' && (
				<div className='score'>
					<p className='body'>
						{type.toUpperCase()}
						{isPlayerOneX && type === 'x' && ' (P1)'}
						{isPlayerOneX && type === 'o' && ' (P2)'}
						{!isPlayerOneX && type === 'x' && ' (P2)'}
						{!isPlayerOneX && type === 'o' && ' (P1)'}
					</p>
					<h2 className='heading-M'>{score[type]}</h2>
				</div>
			)}
		</>
	);
};

export default Score;

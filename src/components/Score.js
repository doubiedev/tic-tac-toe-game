import React from 'react';
import { useNewGameMenu } from '../contexts/NewGameMenuContext';
import { useGame } from '../contexts/GameContext';

const Score = ({ type }) => {
	const { gameType, isPlayerOneX } = useNewGameMenu();
	const { score } = useGame();
	return (
		<div className='score flex flex-column br-L'>
			<p>
				{type.toUpperCase()}

				{gameType === 'cpu' && (
					<>
						{type === 'x' && (isPlayerOneX ? ' (YOU)' : ' (CPU)')}
						{type === 'o' && (isPlayerOneX ? ' (CPU)' : ' (YOU)')}
					</>
				)}
				{gameType === 'player' && (
					<>
						{type === 'x' && (isPlayerOneX ? ' (P1)' : ' (P2)')}
						{type === 'o' && (isPlayerOneX ? ' (P2)' : '  (P1)')}
					</>
				)}
			</p>
			<h2>{score[type]}</h2>
		</div>
	);
};

export default Score;

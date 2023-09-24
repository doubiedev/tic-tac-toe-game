import React from 'react';
import { useNewGameMenu } from '../contexts/NewGameMenuContext';
import { useGame } from '../contexts/GameContext';

const Scores = () => {
	const { gameType, isPlayerOneX } = useNewGameMenu();
	const { score } = useGame();
	return (
		<>
			{gameType === 'cpu' && (
				<div className='scores-container'>
					<div className='score'>
						<p>
							X({isPlayerOneX ? 'YOU' : 'CPU'}): {score.x}
						</p>
					</div>
					<div className='score'>
						<p>TIES: {score.ties}</p>
					</div>
					<div className='score'>
						<p>
							O({isPlayerOneX ? 'CPU' : 'YOU'}): {score.o}
						</p>
					</div>
				</div>
			)}
			{gameType === 'player' && (
				<div className='scores-container'>
					<div className='score'>
						<p>
							X({isPlayerOneX ? 'P1' : 'P2'}): {score.x}
						</p>
					</div>
					<div className='score'>
						<p>TIES: {score.ties}</p>
					</div>
					<div className='score'>
						<p>
							O({isPlayerOneX ? 'P2' : 'P1'}): {score.o}
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Scores;

import React from 'react';
import { useGame, useGameUpdate } from '../contexts/GameContext';

const BannerButtons = () => {
	const { isGameOver } = useGame();
	const { handleBannerReset, toggleBanner, handleQuit } = useGameUpdate();
	return (
		<div className='banner-btns flex'>
			<button
				className='bg-light bg-light-hover bs-light-M text-dark br-M pointer h-max'
				onClick={() => {
					if (isGameOver) {
						handleQuit();
					}
					toggleBanner();
				}}
			>
				<h4>{`${isGameOver ? 'QUIT' : 'CANCEL'}`}</h4>
			</button>
			<button
				className='bg-yellow bg-yellow-hover bs-yellow-M text-dark br-M pointer h-max'
				onClick={() => {
					handleBannerReset();
					toggleBanner();
				}}
			>
				<h4>{`${isGameOver ? 'NEXT ROUND' : 'RESTART'}`}</h4>
			</button>
		</div>
	);
};

export default BannerButtons;

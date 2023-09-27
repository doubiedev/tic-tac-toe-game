import React from 'react';
import { useGame, useGameUpdate } from '../contexts/GameContext';

const BannerButtons = ({ type }) => {
	const { isGameOver } = useGame();
	const { handleBannerReset, toggleBanner, handleQuit } = useGameUpdate();
	return (
		<div className='banner-btns'>
			{isGameOver ? (
				<div>
					<button
						className='banner-btn-grey heading-XS'
						onClick={() => {
							handleQuit();
							toggleBanner();
						}}
					>
						QUIT
					</button>
					<button
						className='banner-btn-yellow heading-XS'
						onClick={() => {
							handleBannerReset();
							toggleBanner();
						}}
					>
						NEXT ROUND
					</button>
				</div>
			) : (
				<div>
					<button
						className='banner-btn-grey heading-XS'
						onClick={() => toggleBanner()}
					>
						NO, CANCEL
					</button>
					<button
						className='banner-btn-yellow heading-XS'
						onClick={() => {
							handleBannerReset();
							toggleBanner();
						}}
					>
						YES, RESTART
					</button>
				</div>
			)}
		</div>
	);
};

export default BannerButtons;

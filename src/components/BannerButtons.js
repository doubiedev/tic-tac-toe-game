import React from 'react';
import { useGame, useGameUpdate } from '../contexts/GameContext';

const BannerButtons = () => {
	const { shouldReset } = useGame();
	const { handleBannerReset, toggleBanner, handleQuit } = useGameUpdate();
	return (
		<>
			{shouldReset && (
				<div className='banner-btns'>
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
			{!shouldReset && (
				<div className='banner-btns'>
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
			)}
		</>
	);
};

export default BannerButtons;

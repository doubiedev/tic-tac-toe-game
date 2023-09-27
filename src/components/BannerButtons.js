import React from 'react';
import { useGame, useGameUpdate } from '../contexts/GameContext';

const BannerButtons = ({ type }) => {
	const { isGameOver } = useGame();
	const { handleBannerReset, toggleBanner, handleQuit } = useGameUpdate();
	return (
		<div className='banner-btns'>
			{isGameOver ? (
				<div className='flex'>
					<button
						className='banner-btn-grey'
						onClick={() => {
							handleQuit();
							toggleBanner();
						}}
					>
						<h4>QUIT</h4>
					</button>
					<button
						className='banner-btn-yellow'
						onClick={() => {
							handleBannerReset();
							toggleBanner();
						}}
					>
						<h4>NEXT ROUND</h4>
					</button>
				</div>
			) : (
				<div className='flex'>
					<button className='banner-btn-grey' onClick={() => toggleBanner()}>
						<h4>NO, CANCEL</h4>
					</button>
					<button
						className='banner-btn-yellow'
						onClick={() => {
							handleBannerReset();
							toggleBanner();
						}}
					>
						<h4>YES, RESTART</h4>
					</button>
				</div>
			)}
		</div>
	);
};

export default BannerButtons;

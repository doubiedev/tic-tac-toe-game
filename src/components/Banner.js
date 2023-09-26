import React from 'react';
import { useGame, useGameUpdate } from '../contexts/GameContext';
import { ReactComponent as IconX } from '../assets/icon-x.svg';
import { ReactComponent as IconO } from '../assets/icon-o.svg';
import BannerButtons from './BannerButtons';

const Banner = () => {
	const { showBanner, isWin, isTie, currentPlayerTurn, shouldReset } =
		useGame();
	return (
		<>
			{showBanner && (
				<div className='banner-container'>
					<div className='banner-wrapper'>
						{isWin && currentPlayerTurn === 'x' && (
							<div className='banner'>
								<h4 className='heading-XS banner-win-loss-text'>YOU WON!</h4>
								<div className='banner-title-text-wrapper'>
									<IconX style={{ marginRight: '24px' }} />
									<h1 className='heading-L text-blue'>TAKES THE ROUND</h1>
								</div>
								<BannerButtons />
							</div>
						)}
						{isWin && currentPlayerTurn === 'o' && (
							<div className='banner'>
								<h4 className='heading-XS banner-win-loss-text'>YOU WON!</h4>
								<div className='banner-title-text-wrapper'>
									<IconO style={{ marginRight: '24px' }} />
									<h1 className='heading-L text-yellow'>TAKES THE ROUND</h1>
								</div>
								<BannerButtons />
							</div>
						)}

						{!isWin && isTie && (
							<div className='banner'>
								<h4 className='heading-XS banner-win-loss-text'>YOU WON!</h4>
								<div className='banner-title-text-wrapper'>
									<h1 className='heading-L text-grey'>ROUND TIED</h1>
								</div>
								<BannerButtons />
							</div>
						)}

						{!isWin && !isTie && shouldReset && (
							<div className='banner'>
								<div className='banner-title-text-wrapper'>
									<h1 className='heading-L text-grey'>RESTART GAME?</h1>
								</div>
								<BannerButtons />
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default Banner;

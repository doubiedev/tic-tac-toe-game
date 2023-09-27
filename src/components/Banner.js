import React from 'react';
import { useGame } from '../contexts/GameContext';
import { ReactComponent as IconX } from '../assets/icon-x.svg';
import { ReactComponent as IconO } from '../assets/icon-o.svg';
import BannerButtons from './BannerButtons';

const Banner = () => {
	const { showBanner, isWin, isTie, currentPlayerTurn } = useGame();
	return (
		<>
			{showBanner && (
				<div className='banner-container flex'>
					<div className='banner-wrapper flex'>
						<div className='flex flex-column'>
							{isWin && (
								<h4 className='heading-XS banner-win-loss-text'>YOU WON!</h4>
							)}

							{isWin && (
								<div className='flex max-width'>
									{currentPlayerTurn === 'x' && (
										<IconX style={{ marginRight: '24px' }} />
									)}

									{currentPlayerTurn === 'o' && (
										<IconO style={{ marginRight: '24px' }} />
									)}

									<h1
										className={`heading-L ${
											currentPlayerTurn === 'x' && 'text-blue'
										} ${currentPlayerTurn === 'o' && 'text-yellow'}`}
									>
										TAKES THE ROUND
									</h1>
								</div>
							)}

							{!isWin && (
								<div className='banner-title-text-wrapper'>
									<h1 className='heading-L text-grey'>
										{isTie ? 'ROUND TIED' : 'RESTART GAME?'}
									</h1>
								</div>
							)}

							<BannerButtons />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Banner;

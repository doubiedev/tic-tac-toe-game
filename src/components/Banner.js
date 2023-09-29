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
				<div className='banner-container flex w-max h-max'>
					<div className='banner-wrapper flex flex-column bg-dark-highlight w-max'>
						{isWin ? (
							<div className='flex flex-column'>
								<h4 className='banner-win-loss-text text-light'>YOU WON!</h4>
								<div className='flex w-max'>
									{currentPlayerTurn === 'x' && (
										<IconX style={{ marginRight: '24px' }} />
									)}

									{currentPlayerTurn === 'o' && (
										<IconO style={{ marginRight: '24px' }} />
									)}

									<h1
										className={`${currentPlayerTurn === 'x' && 'text-blue'} ${
											currentPlayerTurn === 'o' && 'text-yellow'
										}`}
									>
										TAKES THE ROUND
									</h1>
								</div>
							</div>
						) : (
							<h1 className='banner-no-win-text text-light'>
								{isTie ? 'ROUND TIED' : 'RESTART GAME?'}
							</h1>
						)}

						<BannerButtons />
					</div>
				</div>
			)}
		</>
	);
};

export default Banner;

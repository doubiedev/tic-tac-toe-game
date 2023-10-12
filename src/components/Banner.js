import React from 'react';
import { useGame } from '../contexts/GameContext';
import { useNewGameMenu } from '../contexts/NewGameMenuContext';
import { ReactComponent as IconX } from '../assets/icon-x.svg';
import { ReactComponent as IconO } from '../assets/icon-o.svg';
import BannerButtons from './BannerButtons';
// show player 1 text vs show player 2 text, each variable will then be whatever text maybe??
const Banner = () => {
	const { showBanner, isWin, isTie, currentPlayerTurn, playerOneMark } =
		useGame();
	const { gameType } = useNewGameMenu();

	return (
		<>
			{showBanner && (
				<div className='banner-container flex w-max h-max'>
					<div className='banner-wrapper flex flex-column bg-dark-highlight w-max'>
						{isWin ? (
							<div className='flex flex-column'>
								{gameType === 'cpu' && (
									<h4 className='banner-win-loss-text text-light'>
										{currentPlayerTurn === playerOneMark
											? 'YOU WON!'
											: 'OH NO, YOU LOST ...'}
									</h4>
								)}
								{gameType === 'player' && (
									<h4 className='banner-win-loss-text text-light'>
										{currentPlayerTurn === playerOneMark
											? 'PLAYER 1 WINS!'
											: 'PLAYER 2 WINS!'}
									</h4>
								)}
								<div className='flex w-max'>
									{currentPlayerTurn === 'x' ? (
										<IconX style={{ marginRight: '24px' }} />
									) : (
										<IconO style={{ marginRight: '24px' }} />
									)}

									<h1
										className={`${
											currentPlayerTurn === 'x' ? 'text-blue' : 'text-yellow'
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

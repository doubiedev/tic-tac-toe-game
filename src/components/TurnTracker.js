import React from 'react';
import { useGame } from '../contexts/GameContext';
import { ReactComponent as IconX } from '../assets/icon-x.svg';
import { ReactComponent as IconO } from '../assets/icon-o.svg';

const TurnTracker = () => {
	const { currentPlayerTurn } = useGame();
	return (
		<div className='turn-tracker flex bg-dark-highlight text-light bs-dark-M pb-M h-max'>
			{currentPlayerTurn === 'x' ? (
				<IconX className='fill-light' />
			) : (
				<IconO className='fill-light' />
			)}
			<h4 className='turn-tracker-text'>TURN</h4>
		</div>
	);
};

export default TurnTracker;

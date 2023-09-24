import React from 'react';
import { useGame } from '../contexts/GameContext';
import { ReactComponent as IconX } from '../assets/icon-x.svg';
import { ReactComponent as IconO } from '../assets/icon-o.svg';

const TurnTracker = () => {
	const { currentPlayerTurn } = useGame();
	return (
		<div className='turn-tracker'>
			{currentPlayerTurn === 'x' ? (
				<IconX style={{ width: '20px', height: '20px' }} />
			) : (
				<IconO style={{ width: '20px', height: '20px' }} />
			)}
			<h4 className='heading-XS turn-tracker-text'>TURN</h4>
		</div>
	);
};

export default TurnTracker;

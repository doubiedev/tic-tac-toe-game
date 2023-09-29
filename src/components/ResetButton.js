import React from 'react';
import { useGameUpdate } from '../contexts/GameContext';
import { ReactComponent as Reset } from '../assets/icon-restart.svg';

const ResetButton = () => {
	const { handleResetButton } = useGameUpdate();

	return (
		<button
			className='reset-btn bg-light bg-light-hover br-M bs-light-M pointer h-max'
			onClick={() => handleResetButton()}
		>
			<Reset />
		</button>
	);
};

export default ResetButton;

import React from 'react';
import { useGameUpdate } from '../contexts/GameContext';
import { ReactComponent as IconRestart } from '../assets/icon-restart.svg';

const ResetButton = () => {
	const { handleResetButton } = useGameUpdate();

	return (
		<button
			className='reset-btn bg-light bg-light-hover br-M bs-light-M pointer h-max'
			onClick={() => handleResetButton()}
		>
			<IconRestart />
		</button>
	);
};

export default ResetButton;

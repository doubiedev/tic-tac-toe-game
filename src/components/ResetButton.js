import React from 'react';
import { useGameUpdate } from '../contexts/GameContext';

const ResetButton = () => {
	const { handleReset } = useGameUpdate();

	return <button onClick={() => handleReset()}>Reset Game</button>;
};

export default ResetButton;

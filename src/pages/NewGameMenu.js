import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewGameMenu = () => {
	const navigate = useNavigate();

	const [isPlayerOneX, setIsPlayerOneX] = useState(true);

	const handleNewGameClick = (gameType) => {
		navigate('/game', { state: { gameType, isPlayerOneX } });
	};

	return (
		<>
			<button onClick={() => setIsPlayerOneX(!isPlayerOneX)}>
				Swap Player 1's Mark
			</button>
			<br />
			<p>Player 1's Selected Mark: {isPlayerOneX ? 'X' : 'O'}</p>

			<button onClick={() => handleNewGameClick('cpu')}>
				NEW GAME (VS CPU)
			</button>
			<br />
			<button onClick={() => handleNewGameClick('player')}>
				NEW GAME (VS PLAYER)
			</button>
		</>
	);
};

export default NewGameMenu;

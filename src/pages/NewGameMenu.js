import React from 'react';
import {
	useNewGameMenu,
	useNewGameMenuUpdate,
} from '../contexts/NewGameMenuContext';

const NewGameMenu = () => {
	const { isPlayerOneX } = useNewGameMenu();
	const { setIsPlayerOneX, handleNewGameClick } = useNewGameMenuUpdate();

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

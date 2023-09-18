import React, { useState } from 'react';

const NewGameMenu = () => {
	const [isPlayerOneX, setIsPlayerOneX] = useState(true);

	return (
		<>
			<button onClick={() => setIsPlayerOneX(!isPlayerOneX)}>
				Swap Player 1's Mark
			</button>
			<br />
			<p>Player 1's Selected Mark: {isPlayerOneX ? 'X' : 'O'}</p>

			<button>NEW GAME (VS CPU)</button>
			<br />
			<button>NEW GAME (VS PLAYER)</button>
		</>
	);
};

export default NewGameMenu;

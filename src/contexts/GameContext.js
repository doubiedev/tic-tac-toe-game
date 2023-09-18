import { createContext, useContext } from 'react';
import { useNewGameMenu } from './NewGameMenuContext';

const GameContext = createContext();
const GameContextUpdate = createContext();

export const useGame = () => useContext(GameContext);
export const useGameUpdate = () => useContext(GameContextUpdate);

export const GameProvider = ({ children }) => {
	const { gameType } = useNewGameMenu();

	console.log(gameType);

	return (
		<GameContext.Provider value={''}>
			<GameContextUpdate.Provider value={''}>
				{children}
			</GameContextUpdate.Provider>
		</GameContext.Provider>
	);
};

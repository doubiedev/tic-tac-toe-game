import { createContext, useContext, useState } from 'react';
import { useNewGameMenu } from './NewGameMenuContext';

const GameContext = createContext();
const GameContextUpdate = createContext();

export const useGame = () => useContext(GameContext);
export const useGameUpdate = () => useContext(GameContextUpdate);

export const GameProvider = ({ children }) => {
	const { gameType } = useNewGameMenu();

	const initialGridItems = [];
	for (let id = 1; id <= 9; id++) {
		initialGridItems.push({ id, mark: '', isWinState: false });
	}
	const [gridItems, setGridItems] = useState(initialGridItems);

	const handleClick = (id) => {
		const updatedGridItems = gridItems.map((gridItem) =>
			gridItem.id === id ? { ...gridItem, mark: 'on' } : gridItem
		);
		setGridItems(updatedGridItems);
	};

	return (
		<GameContext.Provider value={{ gridItems }}>
			<GameContextUpdate.Provider value={{ handleClick }}>
				{children}
			</GameContextUpdate.Provider>
		</GameContext.Provider>
	);
};

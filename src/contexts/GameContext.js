import { createContext, useContext, useState } from 'react';
import { useNewGameMenu } from './NewGameMenuContext';

const GameContext = createContext();
const GameContextUpdate = createContext();

export const useGame = () => useContext(GameContext);
export const useGameUpdate = () => useContext(GameContextUpdate);

export const GameProvider = ({ children }) => {
	const { gameType, isPlayerOneX } = useNewGameMenu();

	const initialGridItems = [];
	for (let id = 1; id <= 9; id++) {
		initialGridItems.push({ id, mark: '', isWinState: false });
	}
	const [gridItems, setGridItems] = useState(initialGridItems);
	const [currentPlayerTurn, setCurrentPlayerTurn] = useState(
		isPlayerOneX ? 'x' : 'o'
	);

	const handleClick = (id) => {
		if (gridItems.find((gridItem) => gridItem.id === id).mark === '') {
			const updatedGridItems = gridItems.map((gridItem) =>
				gridItem.id === id && gridItem.mark === ''
					? { ...gridItem, mark: currentPlayerTurn }
					: gridItem
			);
			setGridItems(updatedGridItems);
			setCurrentPlayerTurn(currentPlayerTurn === 'x' ? 'o' : 'x');
		}
	};

	return (
		<GameContext.Provider value={{ gridItems, currentPlayerTurn }}>
			<GameContextUpdate.Provider value={{ handleClick }}>
				{children}
			</GameContextUpdate.Provider>
		</GameContext.Provider>
	);
};

import { createContext, useContext, useEffect, useState } from 'react';
import { useNewGameMenu } from './NewGameMenuContext';

const GameContext = createContext();
const GameContextUpdate = createContext();

export const useGame = () => useContext(GameContext);
export const useGameUpdate = () => useContext(GameContextUpdate);

export const GameProvider = ({ children }) => {
	const { gameType, isPlayerOneX } = useNewGameMenu();

	const initialGridItems = [];
	for (let id = 1; id <= 9; id++) {
		initialGridItems.push({ id, mark: '' });
	}
	const [gridItems, setGridItems] = useState(initialGridItems);

	const [currentPlayerTurn, setCurrentPlayerTurn] = useState(
		isPlayerOneX ? 'x' : 'o'
	);
	const [isWin, setIsWin] = useState(false);
	const [isTie, setIsTie] = useState(false);
	const [isHoverId, setIsHoverId] = useState(null);
	const [score, setScore] = useState({ x: 0, ties: 0, o: 0 });

	useEffect(() => {
		if (!isWin && isTie) {
			updateScore('ties');
		}
		if (isWin) {
			updateScore(currentPlayerTurn);
		}
	}, [isTie, isWin]);

	const handleGridItemClick = (id) => {
		if (gridItems.find((gridItem) => gridItem.id === id).mark === '') {
			const updatedGridItems = gridItems.map((gridItem) =>
				gridItem.id === id && gridItem.mark === ''
					? { ...gridItem, mark: currentPlayerTurn }
					: gridItem
			);
			setGridItems(updatedGridItems);
			setIsWin(isWinner(updatedGridItems));
			setIsTie(isTied(updatedGridItems));

			if (!isWinner(updatedGridItems) && !isTied(updatedGridItems)) {
				setCurrentPlayerTurn(currentPlayerTurn === 'x' ? 'o' : 'x');
			}
		}
	};

	const updateScore = (scoreType) => {
		setScore((prevScore) => {
			const newScore = { ...prevScore };
			newScore[scoreType] += 1;
			return newScore;
		});
	};

	const handleGridItemHover = (e, id) => {
		if (e.type === 'mouseenter') {
			setIsHoverId(id);
		}
		if (e.type === 'mouseleave') {
			setIsHoverId(null);
		}
	};

	const handleReset = () => {
		setGridItems(initialGridItems);
		setCurrentPlayerTurn(isPlayerOneX ? 'x' : 'o');
	};

	const isWinner = (updatedGridItems) => {
		const currentPlayerMarks = updatedGridItems
			.filter((gridItem) => gridItem.mark === currentPlayerTurn)
			.map((gridItem) => gridItem.id);

		const winningCombinations = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9],
			[1, 5, 9],
			[3, 5, 7],
		];

		const isWinningCombination = winningCombinations.some((combo) =>
			combo.every((item) => currentPlayerMarks.includes(item))
		);

		return isWinningCombination;
	};

	const isTied = (updatedGridItems) => {
		const isGridFull = !updatedGridItems.some(
			(gridItem) => gridItem.mark === ''
		);
		return isGridFull;
	};

	return (
		<GameContext.Provider
			value={{ gridItems, currentPlayerTurn, isWin, isTie, isHoverId, score }}
		>
			<GameContextUpdate.Provider
				value={{ handleGridItemClick, handleGridItemHover, handleReset }}
			>
				{children}
			</GameContextUpdate.Provider>
		</GameContext.Provider>
	);
};

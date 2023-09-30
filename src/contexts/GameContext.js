import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNewGameMenu } from './NewGameMenuContext';

const GameContext = createContext();
const GameContextUpdate = createContext();

export const useGame = () => useContext(GameContext);
export const useGameUpdate = () => useContext(GameContextUpdate);

export const GameProvider = ({ children }) => {
	const { gameType, isPlayerOneX } = useNewGameMenu();
	const navigate = useNavigate();

	const initialGridItems = [];
	for (let id = 1; id <= 9; id++) {
		initialGridItems.push({ id, mark: '', isHighlighted: false });
	}
	const [gridItems, setGridItems] = useState(initialGridItems);

	const [currentPlayerTurn, setCurrentPlayerTurn] = useState(
		isPlayerOneX ? 'x' : 'o'
	);
	const [isGameOver, setIsGameOver] = useState(false);
	const [isWin, setIsWin] = useState(false);
	const [isTie, setIsTie] = useState(false);
	const [isHoverId, setIsHoverId] = useState(null);
	const [scoreCpu, setScoreCpu] = useState({ x: 0, ties: 0, o: 0 });
	const [scorePlayer, setScorePlayer] = useState({ x: 0, ties: 0, o: 0 });
	const [showBanner, setShowBanner] = useState(false);
	const [shouldReset, setShouldReset] = useState(false);

	useEffect(() => {
		if (gameType === '') navigate('/');
	}, []);

	useEffect(() => {
		if (isWinner(gridItems)) {
			setIsWin(true);
			updateScore(currentPlayerTurn);
			toggleBanner();
		}
		if (isTied(gridItems)) {
			setIsTie(true);
			updateScore('ties');
			toggleBanner();
		}
	}, [isGameOver]);

	const handleGridItemClick = (id) => {
		if (gridItems.find((gridItem) => gridItem.id === id).mark === '') {
			const updatedGridItems = gridItems.map((gridItem) =>
				gridItem.id === id && gridItem.mark === ''
					? { ...gridItem, mark: currentPlayerTurn }
					: gridItem
			);
			setGridItems(updatedGridItems);

			if (!isWinner(updatedGridItems) && !isTied(updatedGridItems)) {
				setCurrentPlayerTurn(currentPlayerTurn === 'x' ? 'o' : 'x');
			}
		}
	};

	const updateScore = (scoreType) => {
		if (gameType === 'cpu') {
			setScoreCpu((prevScore) => {
				const newScore = { ...prevScore };
				newScore[scoreType] += 1;
				return newScore;
			});
		}
		if (gameType === 'player') {
			setScorePlayer((prevScore) => {
				const newScore = { ...prevScore };
				newScore[scoreType] += 1;
				return newScore;
			});
		}
	};

	const handleGridItemHover = (e, id) => {
		if (e.type === 'mouseenter') {
			setIsHoverId(id);
		}
		if (e.type === 'mouseleave') {
			setIsHoverId(null);
		}
	};

	const handleResetButton = () => {
		setShouldReset(true);
		toggleBanner();
	};

	const handleBannerReset = () => {
		setGridItems(initialGridItems);
		setCurrentPlayerTurn(isPlayerOneX ? 'x' : 'o');
		setIsWin(false);
		setIsTie(false);
		setIsGameOver(false);
	};

	const handleQuit = () => {
		handleBannerReset();
		navigate('/');
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

		for (const combo of winningCombinations) {
			if (combo.every((item) => currentPlayerMarks.includes(item))) {
				const updatedItems = updatedGridItems.map((gridItem) => ({
					...gridItem,
					isHighlighted: combo.includes(gridItem.id),
				}));

				setGridItems(updatedItems);
			}
		}

		const isWinningCombination = winningCombinations.some((combo) =>
			combo.every((item) => currentPlayerMarks.includes(item))
		);

		if (isWinningCombination) {
			setIsGameOver(true);
		}

		return isWinningCombination;
	};

	const isTied = (updatedGridItems) => {
		const isGridFull = !updatedGridItems.some(
			(gridItem) => gridItem.mark === ''
		);

		if (!isWinner(updatedGridItems) && isGridFull) {
			setIsGameOver(true);
			return true;
		} else return false;
	};

	const toggleBanner = () => {
		setShowBanner(!showBanner);
	};

	return (
		<GameContext.Provider
			value={{
				gridItems,
				currentPlayerTurn,
				isWin,
				isTie,
				isHoverId,
				scoreCpu,
				scorePlayer,
				showBanner,
				shouldReset,
				isGameOver,
			}}
		>
			<GameContextUpdate.Provider
				value={{
					handleGridItemClick,
					handleGridItemHover,
					handleResetButton,
					toggleBanner,
					handleBannerReset,
					handleQuit,
				}}
			>
				{children}
			</GameContextUpdate.Provider>
		</GameContext.Provider>
	);
};

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
	for (let id = 0; id <= 8; id++) {
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

	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

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

	useEffect(() => {
		if (gameType === 'cpu') {
			const userMark = isPlayerOneX ? 'x' : 'o';
			const cpuMark = isPlayerOneX ? 'o' : 'x';

			if (currentPlayerTurn === cpuMark) {
				setTimeout(() => {
					handleCpu(gridItems, cpuMark, userMark);
					setCurrentPlayerTurn(userMark);
				}, 500);
			}
		}
	}, [currentPlayerTurn, gameType]);

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

	const handleCpu = (updatedGridItems, cpuMark, userMark) => {
		const calculateCPUMove = (gameState) => {
			if (currentPlayerTurn === cpuMark) {
				// Check for either player about to win
				for (const combo of winningCombinations) {
					const [a, b, c] = combo;
					const marks = [
						gameState[a].mark,
						gameState[b].mark,
						gameState[c].mark,
					];
					// Try to win
					if (
						marks.includes('') &&
						marks.filter((mark) => mark === cpuMark).length === 2
					) {
						const emptyIndex = marks.indexOf('');
						if (emptyIndex === 0) return a;
						if (emptyIndex === 1) return b;
						if (emptyIndex === 2) return c;
					}
					// Block player from winning
					if (
						marks.includes('') &&
						marks.filter((mark) => mark === userMark).length === 2
					) {
						const emptyIndex = marks.indexOf('');
						if (emptyIndex === 0) return a;
						if (emptyIndex === 1) return b;
						if (emptyIndex === 2) return c;
					}
				}

				// Take the center if available
				if (gameState[4].mark === '') {
					return 4;
				}

				// Try to take a corner
				const corners = [0, 2, 6, 8];
				for (const corner of corners) {
					if (gameState[corner].mark === '') {
						return corner;
					}
				}

				// Try to take an edge
				const edges = [1, 3, 5, 7];
				for (const edge of edges) {
					if (gameState[edge].mark === '') {
						return edge;
					}
				}

				// If no strategic moves are available, make a random move
				const emptyCells = gameState
					.map((cell, index) => (cell.mark === '' ? index : -1))
					.filter((index) => index !== -1);
				if (emptyCells.length > 0) {
					const randomIndex = Math.floor(Math.random() * emptyCells.length);
					return emptyCells[randomIndex];
				}
			}

			return -1; // No valid move found
		};

		const cpuMove = calculateCPUMove(updatedGridItems);

		if (cpuMove >= 0) {
			const newGridItems = [...updatedGridItems];
			newGridItems[cpuMove].mark = currentPlayerTurn;

			setGridItems(newGridItems);
		}
		console.log(cpuMove);
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

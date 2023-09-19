import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewGameMenuContext = createContext();
const NewGameMenuContextUpdate = createContext();

export const useNewGameMenu = () => useContext(NewGameMenuContext);
export const useNewGameMenuUpdate = () => useContext(NewGameMenuContextUpdate);

export const NewGameMenuProvider = ({ children }) => {
	const navigate = useNavigate();

	const [isPlayerOneX, setIsPlayerOneX] = useState(true);
	const [gameType, setGameType] = useState('');

	const handleNewGameClick = (gameType) => {
		setGameType(gameType);
		navigate('/game');
	};

	return (
		<NewGameMenuContext.Provider value={{ isPlayerOneX, gameType }}>
			<NewGameMenuContextUpdate.Provider
				value={{ handleNewGameClick, setIsPlayerOneX }}
			>
				{children}
			</NewGameMenuContextUpdate.Provider>
		</NewGameMenuContext.Provider>
	);
};

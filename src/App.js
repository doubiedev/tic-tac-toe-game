import './App.css';
import { Routes, Route } from 'react-router-dom';
import NewGameMenu from './pages/NewGameMenu';
import Game from './pages/Game';
import { NewGameMenuProvider } from './contexts/NewGameMenuContext';
import { GameProvider } from './contexts/GameContext';

function App() {
	return (
		<NewGameMenuProvider>
			<GameProvider>
				<Routes>
					<Route path='/' element={<NewGameMenu />} />
					<Route path='/game' element={<Game />} />
				</Routes>
			</GameProvider>
		</NewGameMenuProvider>
	);
}

export default App;

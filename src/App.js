import './App.css';
import { Routes, Route } from 'react-router-dom';
import NewGameMenu from './pages/NewGameMenu';
import Game from './pages/Game';

function App() {
	return (
		<Routes>
			<Route path='/' element={<NewGameMenu />} />
			<Route path='/game' element={<Game />} />
		</Routes>
	);
}

export default App;

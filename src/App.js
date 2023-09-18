import './App.css';
import { Routes, Route } from 'react-router-dom';
import NewGameMenu from './pages/NewGameMenu';

function App() {
	return (
		<Routes>
			<Route path='/' element={<NewGameMenu />} />
		</Routes>
	);
}

export default App;

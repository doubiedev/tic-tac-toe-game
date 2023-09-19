import React from 'react';
import GridItem from './GridItem';
import { useGame } from '../contexts/GameContext';

const Grid = () => {
	const { gridItems } = useGame();

	return (
		<div className='grid-container'>
			{gridItems.map((gridItem) => (
				<GridItem key={gridItem.id} id={gridItem.id} />
			))}
		</div>
	);
};

export default Grid;

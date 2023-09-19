import React from 'react';
import { useGame, useGameUpdate } from '../contexts/GameContext';

const GridItem = ({ id }) => {
	const { gridItems } = useGame();
	const { handleGridItemClick } = useGameUpdate();

	return (
		<div className='grid-item' onClick={() => handleGridItemClick(id)}>
			{gridItems.find((gridItem) => id === gridItem.id).mark}
		</div>
	);
};

export default GridItem;

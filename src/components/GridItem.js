import React from 'react';
import { useGame, useGameUpdate } from '../contexts/GameContext';

const GridItem = ({ id }) => {
	const { gridItems } = useGame();
	const { handleClick } = useGameUpdate();

	return (
		<div className='grid-item' onClick={() => handleClick(id)}>
			{gridItems.find((gridItem) => id === gridItem.id).mark}
		</div>
	);
};

export default GridItem;

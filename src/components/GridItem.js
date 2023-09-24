import React from 'react';
import { useGame, useGameUpdate } from '../contexts/GameContext';
import { ReactComponent as IconX } from '../assets/icon-x.svg';
import { ReactComponent as IconO } from '../assets/icon-o.svg';
import { ReactComponent as IconXOutline } from '../assets/icon-x-outline.svg';
import { ReactComponent as IconOOutline } from '../assets/icon-o-outline.svg';

const GridItem = ({ id }) => {
	const { gridItems, isHoverId, currentPlayerTurn } = useGame();
	const { handleGridItemClick, handleGridItemHover } = useGameUpdate();

	let mark = gridItems.find((gridItem) => id === gridItem.id).mark;

	return (
		<div
			className='grid-item'
			onClick={() => handleGridItemClick(id)}
			onMouseEnter={(e) => handleGridItemHover(e, id)}
			onMouseLeave={(e) => handleGridItemHover(e, id)}
		>
			{mark === 'x' && <IconX />}
			{mark === 'o' && <IconO />}

			{mark === '' && isHoverId === id && currentPlayerTurn === 'x' && (
				<IconXOutline />
			)}
			{mark === '' && isHoverId === id && currentPlayerTurn === 'o' && (
				<IconOOutline />
			)}
		</div>
	);
};

export default GridItem;

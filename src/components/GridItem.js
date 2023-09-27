import React from 'react';
import { useGame, useGameUpdate } from '../contexts/GameContext';
import { ReactComponent as IconX } from '../assets/icon-x.svg';
import { ReactComponent as IconO } from '../assets/icon-o.svg';
import { ReactComponent as IconXOutline } from '../assets/icon-x-outline.svg';
import { ReactComponent as IconOOutline } from '../assets/icon-o-outline.svg';

const GridItem = ({ id }) => {
	const { gridItems, isHoverId, currentPlayerTurn } = useGame();
	const { handleGridItemClick, handleGridItemHover } = useGameUpdate();

	const mark = gridItems.find((gridItem) => id === gridItem.id).mark;
	const isHighlighted = gridItems.find(
		(gridItem) => id === gridItem.id
	).isHighlighted;

	return (
		<div
			className={`grid-item ${
				isHighlighted && currentPlayerTurn === 'x' && 'highlighted-x'
			} ${isHighlighted && currentPlayerTurn === 'o' && 'highlighted-o'}
			${!isHighlighted && 'non-highlighted'}
			`}
			onClick={() => handleGridItemClick(id)}
			onMouseEnter={(e) => handleGridItemHover(e, id)}
			onMouseLeave={(e) => handleGridItemHover(e, id)}
		>
			{mark === 'x' && <IconX className={isHighlighted ? 'color-dark' : ''} />}
			{mark === 'o' && <IconO className={isHighlighted ? 'color-dark' : ''} />}

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

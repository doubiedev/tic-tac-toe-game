import React from 'react';
import Score from './Score';

const Scores = () => {
	return (
		<div className='scores-container'>
			<Score type='x' />
			<Score type='ties' />
			<Score type='o' />
		</div>
	);
};

export default Scores;

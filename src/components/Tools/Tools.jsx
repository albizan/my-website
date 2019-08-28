import React from 'react';

import data from '../../data/tools.json';

import Tool from './Tool';

const Tools = () => {
	const { tools } = data;

	return (
		<section className="container section-container">
			<h3 className="section-title">Tools I like to use</h3>
			<div className="block md:flex md:justify-start md:flex-wrap md:items-center">
				{tools.map((tool) => <Tool key={tool.id} details={tool} />)}
			</div>
		</section>
	);
};

export default Tools;

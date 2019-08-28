import React from 'react';
import styled, { withTheme } from 'styled-components';

const ToolCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.4rem;
	overflow: hidden;
	background: linear-gradient(45deg, #3503ad, #f7308c);
	margin-bottom: 1rem;
	height: 15rem;
	width: 100%;
	color: white;
	position: relative;
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.1);
		pointer-events: none;
	}
`;

const Tool = ({ details }) => {
	const { name, image } = details;

	let overlayClasses = `absolute inset-0 flex justify-center items-center bg-gray-800`;
	if (1) overlayClasses += ' opacity-0';
	return (
		<div className="w-full md:w-1/2 lg:w-1/3 px-4">
			<ToolCard>
				<div id="image-box">
					<img src={image} alt={`${name} logo`} className="h-16 w-16" />
					<h3 className="text-center uppercase mt-6 font-bold tracking-wider">{name}</h3>
				</div>
				<div id="card-overlay" className={`${overlayClasses}`}>
					<p className="text-center text-white">Ciaooooo</p>
				</div>
			</ToolCard>
		</div>
	);
};

export default withTheme(Tool);

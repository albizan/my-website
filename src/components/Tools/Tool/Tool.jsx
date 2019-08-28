import React from 'react'
import styled, { withTheme } from 'styled-components'

const ToolCard = styled.div`
	user-select: none;
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
`

const Button = styled.div`
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	width: 50px;
	height: 50px;
	background: linear-gradient(45deg, #3503ad, #f7308c);
	border-radius: 50%;
	cursor: pointer;
	box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, .5);
	z-index: 10;
	transition: .5s;
	&:hover {
		box-shadow: none;
		opacity: .9;
		bottom: 0rem;
		right: 0rem;
		width: 100%;
		height: 100%;
		border-radius: 0;
	}
`
const Hint = styled.div`
	font-size: .7rem;
	text-transform: uppercase;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	${Button}:hover & {
		display: none;
	}
`

const ToolDescription = styled.div`
	font-size: .1rem;
	text-align: center;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	opacity: 0;
	justify-content: center;
	align-items: center;
	transition: .5s;
	padding: 1rem;
	${Button}:hover & {
		transition-delay: .0s;
		font-size: 1rem;
		opacity: 1;
	}
`

const Tool = ({ details }) => {
	const { name, image, description } = details

	return (
		<div className="w-full md:w-1/2 lg:w-1/3 px-4">
			<ToolCard>
				<div id="image-box">
					<img src={image} alt={`${name} logo`} className="h-16 w-16" />
					<h3 className="text-center uppercase mt-6 font-bold tracking-wider">{name}</h3>
				</div>
				<Button>
					<Hint>Why?</Hint>
					<ToolDescription>
						<h4 className="mb-4 text-xl font-bold">{name}</h4>
						{description}
					</ToolDescription>
				</Button>
			</ToolCard>
		</div>
	)
}

export default withTheme(Tool)

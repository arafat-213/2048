import React, { useState } from 'react'

const App = () => {
	const [data, setData] = useState([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	])
	return (
		<div
			className='App'
			style={{
				background: '#AD9D8F',
				width: 'max-content',
				margin: 'auto',
				padding: 5,
				borderRadius: 5,
				marginTop: 10
			}}>
			{data.map((row, oneIndex) => {
				return (
					<div style={{ display: 'flex' }} key={oneIndex}>
						{row.map((digit, index) => (
							<Block num={digit} key={index} />
						))}
					</div>
				)
			})}
		</div>
	)
}
const Block = ({ num }) => {
	const { blockStyle } = style

	return (
		<div
			style={{
				...blockStyle,
				color: num === 2 || num === 4 ? '#645B52' : '#F7F4EF'
			}}>
			{num}
			{/* {num !== 0 ? num : ''} */}
		</div>
	)
}

const style = {
	blockStyle: {
		height: 80,
		width: 80,
		background: 'ligthgray',
		margin: 3,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 45,
		fontWeight: '800',
		color: 'white'
	}
}

export default App

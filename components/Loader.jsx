import React, { useEffect, useRef, useState } from 'react';
import { Html, useProgress } from '@react-three/drei';
import Image from "next/image";

const Loader = () => {
	const { progress } = useProgress()

	const [ percent, setPercent ] = useState(10 + Math.random()* 100 % 20)
	const [ percentValue, setPercentValue ] = useState(0)

	const percentValueRef = useRef()
	percentValueRef.current = percentValue

	useEffect(() => {
		if( progress > percent ) {
			setPercent(progress)
			
		}

	}, [progress])

	useEffect(() => {
		if( percentValue < percent ) {
			setTimeout(() => {
				setPercentValue(prev => prev + 1)
			}, 10)
		}
	}, [percent])

	useEffect(() => {
		if( percentValue < percent ) {
			setTimeout(() => {
				setPercentValue(prev => prev + 1)
			}, 10)
		}
	}, [percentValue])

	return (
		<Html>
			<div 
				style={{ 
					position: 'relative', 
					zIndex: '100', 
					width: '100vw', 
					height: '100vh', 
					background: '#292929', 
					left: '-50%', 
					top: '-50vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<Image 
					src='/Assets/loader.gif' 
					alt='pic' 
					width={250} 
					height={250} 
					style={{ 
						position: 'absolute', 
						transform: 'translate3d(-50%, -50%, 0)', 
						left: '50%', 
						top: '50%' 
					}} 
				/>

				<h1 style={{ color: '#21ff00', fontFamily: 'Odachi', }}>{percentValue}%</h1>
			</div>

			<div 
				style={{ 
					position: 'relative', 
					zIndex: '100', 
					width: '100vw', 
					height: '100vh', 
					background: '#292929', 
					left: '-50%', 
					top: '-50vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<Image 
					src='/Assets/loader.gif' 
					alt='pic' 
					width={250} 
					height={250} 
					style={{ 
						position: 'absolute', 
						transform: 'translate3d(-50%, -50%, 0)', 
						left: '50%', 
						top: '50%' 
					}} 
				/>

				<h1 style={{ color: '#21ff00', fontFamily: 'Odachi', }}>{percentValue}%</h1>
			</div>
		</Html>
	)
}

export default Loader;

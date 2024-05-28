import { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';

const HamburgerButton = () => {
	const [active, setActive] = useState(false);

	return (
		<MotionConfig
			transition={{
				duration: 0.3,
				ease: 'easeInOut',
			}}
		>
			<motion.button
				className='hamburger-button transition-colors'
				onClick={() => {
					setActive((currState) => !currState);
				}}
				animate={active ? 'open' : 'closed'}
				initial={false}
			>
				<motion.span
					className='hamburger-span'
					style={{
						top: '35%',
						left: '50%',
						x: '-50%',
						y: '-50%',
					}}
					variants={{
						open: {
							rotate: ['0deg', '0deg', '45deg'],
							top: ['35%', '50%', '50%'],
						},
						closed: {
							rotate: ['45deg', '0deg', '0deg'],
							top: ['50%', '50%', '35%'],
						},
					}}
				/>
				<motion.span
					className='hamburger-span'
					style={{
						top: '50%',
						left: '50%',
						x: '-50%',
						y: '-50%',
					}}
					variants={{
						open: {
							rotate: ['0deg', '0deg', '-45deg'],
						},
						closed: {
							rotate: ['-45deg', '0deg', '0deg'],
						},
					}}
				/>
				<motion.span
					className='hamburger-span'
					style={{
						top: '65%',
						left: '50%',
						x: '-50%',
						y: '-50%',
					}}
					variants={{
						open: {
							rotate: ['0deg', '0deg', '-45deg'],
							top: ['65%', '50%', '50%'],
						},
						closed: {
							rotate: ['-45deg', '0deg', '0deg'],
							top: ['50%', '50%', '65%'],
						},
					}}
				/>
			</motion.button>
		</MotionConfig>
	);
};

export default HamburgerButton;

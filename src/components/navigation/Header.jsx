import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import HamburgerButton from '../buttons/HamburgerButton';

const Header = () => {
	return (
		<div id='page-header'>
			<div className='header-branding'>
				<NavLink to='/' id='jimmer-brand'>
					James Rozsypal
				</NavLink>
			</div>
			<div className='desktop-nav'>
				<Navbar />
			</div>
			<div className='mobile-nav'>
				<HamburgerButton />
			</div>
		</div>
	);
};

export default Header;

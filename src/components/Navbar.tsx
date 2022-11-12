import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className='navbar'>
				{/* nav title */}
				<h1>Color Flipper</h1>

				{/* nav links */}
				<ul>
					<li>
						<Link to={'color-flipper-tsx/'}>Simple</Link>
					</li>
					<li>
						<Link to={'color-flipper-tsx/hex'}>Hex</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;

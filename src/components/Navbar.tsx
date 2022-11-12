import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header>
			<nav className='flex bg-white'>
				{/* nav title */}
				<h1 className='text-4xl font-semibold text-cyan-600 py-6 ml-12 cursor-pointer tracking-wide'>
					Color Flipper
				</h1>

				{/* nav links */}
				<ul className='flex pr-6 ml-auto'>
					<li className='py-6 px-6'>
						<Link
							to={'color-flipper-tsx/'}
							className='text-2xl font-semibold text-cyan-900 tracking-wide'
						>
							Simple
						</Link>
					</li>
					<li className='py-6 px-6'>
						<Link
							to={'color-flipper-tsx/hex'}
							className='text-2xl font-semibold text-cyan-900 tracking-wide'
						>
							Hex
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;

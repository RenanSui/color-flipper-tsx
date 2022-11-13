import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='font-inter'>
            <nav className='navbar'>
                {/* nav title */}
                <h1 className='navTitle'>Color Flipper</h1>

                {/* nav links */}
                <ul className='navUl'>
                    <li className='p-3 sm:p-6'>
                        <Link to={'color-flipper-tsx/'} className='navLink'>
                            Simple
                        </Link>
                    </li>
                    <li className='p-3 sm:p-6'>
                        <Link to={'color-flipper-tsx/hex'} className='navLink'>
                            Hex
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;

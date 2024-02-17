import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <div className="nav nav-tabs">
            <p className="nav-option">
                <Link
                    to="/"
                    className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </Link>
            </p>
            <p className="nav-option">
                <Link
                    to="/Projects"
                    className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
                >
                    Projects
                </Link>
            </p>
            <p className="nav-option">
                <Link
                    to="/Contact"
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Link>
            </p>
        </div>
    );
}

export default Nav;

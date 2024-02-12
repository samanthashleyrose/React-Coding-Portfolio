import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <div className="nav nav-tabs">
            <p className="nav-option">
                <Link
                    to="/"
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </Link>
            </p>
            <p className="nav-option">
                <Link
                    to="/Projects"
                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
                >
                    Projects
                </Link>
            </p>
            <p className="nav-option">
                <Link
                    to="/Contact"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Link>
            </p>
        </div>
    );
}

export default Nav;

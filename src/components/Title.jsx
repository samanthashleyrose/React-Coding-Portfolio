import { Link, useLocation } from 'react-router-dom';

function Title() {
    const currentPage = useLocation().pathname;

    return (
        <div className="title">
            <h1>Samantha Rose</h1>
        </div>
    );
}

export default Title;

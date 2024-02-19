import { Link, useLocation } from 'react-router-dom';

function Title() {
    const currentPage = useLocation().pathname;

    return (
        <div>
            <h1 id="title">Samantha Rose</h1>
            <h3 id="subtitle">Full Stack Web Developer</h3>
        </div>
    );
}

export default Title;

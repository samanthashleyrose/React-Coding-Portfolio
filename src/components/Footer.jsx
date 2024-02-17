import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const currentPage = useLocation().pathname;

    return (
        <div className="footer">
            <h4>made with ❤</h4>
            <a href="https://github.com/samanthashleyrose?tab=repositories">
                <img src="/assets/github-icon.png" alt="Github Icon" className="footer-option"/>
                Github
            </a>
            <a href="">
                <img src="/assets/LinkedIn-icon.png" alt="LinkedIn Icon" className="footer-option"/>
                LinkedIn
            </a>
            <a href="samantha.rose327@gmail.com">
                <img src="/assets/LinkedIn-icon.png" alt="Gmail Icon" className="footer-option"/>
                Gmail
            </a>
        </div>
    );
}

export default Footer;

import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const currentPage = useLocation().pathname;

    return (
        <div className="footer">
            <h4>made with ❤</h4>
            <a href="https://github.com/samanthashleyrose?tab=repositories">
                <img src="/public/assets/imgs/github-icon.png" alt="Github Icon" className="footer-option"/>
            </a>
            <a href="">
                <img src="/public/assets/imgs/linkedin-icon.png" alt="LinkedIn Icon" className="footer-option"/>
            </a>
            <a href="samantha.rose327@gmail.com">
                <img src="/public/assets/imgs/gmail-icon.png" alt="Gmail Icon" className="footer-option"/>
            </a>
        </div>
    );
}

export default Footer;

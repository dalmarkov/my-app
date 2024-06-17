import "./style.css"

import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import discord from "./../../img/icons/discord.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://vk.com/dalmarkov" target="_blank" rel="noopener noreferrer" className="icon-link"><img src={vk} alt={vk} /></a></li>
                    <li className="social__item"><a href="https://www.instagram.com/dalmarkov" target="_blank" rel="noopener noreferrer" className="icon-link"><img src={instagram} alt={instagram} /></a></li>
                    <li className="social__item"><a href="https://discord.com/channels/@dalmarkov" target="_blank" rel="noopener noreferrer" className="icon-link"><img src={discord} alt={discord} /></a></li>
                    <li className="social__item"><a href="https://github.com/dalmarkov" target="_blank" rel="noopener noreferrer" className="icon-link"><img src={gitHub} alt={gitHub} /></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/dzmitry-markau-73889b265/" target="_blank" rel="noopener noreferrer" className="icon-link"><img src={linkedIn} alt={linkedIn} /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2023 DALMARKOV BY</p>
                </div>
            </div>
        </div>
    </footer>
    )

}

export default Footer

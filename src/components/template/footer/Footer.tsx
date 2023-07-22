import gitHub from "../../../assets/svg/github.svg";
import linkedin from "../../../assets/svg/linkedin.svg";

import "./footer.css";

export default function Footer() {
    return (
        <footer>
        <div className="footer-container">
            <div>
                <div className="author-name">
                    <h3>
                        ©Henrique Silva
                    </h3>
                </div>
                <div className="social-media-link">
                    <div className="link">
                        <a href="https://github.com/Henriquesb-1" target="_blank" rel="noreferrer" title="Perfil do gitHub de Henrique Silva">
                            <img src={gitHub} alt="Link to linkedln" />
                        </a>
                    </div>

                    <div className="link">
                        <a href="https://www.linkedin.com/in/henrique-silva-3551a1221/" target="_blank" rel="noreferrer" title="Perfil do linkedin de Henrique Silva">
                            <img src={linkedin} alt="Link to gitHub" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
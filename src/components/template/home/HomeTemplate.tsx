import bhaskaraCover from "../../../assets/bhaskara/bhaskara-back.png";
import financingCover from "../../../assets/financing/car.png";
import pitagorasCover from "../../../assets/pitagoras/pitagoras-back.png";
import imcCover from "../../../assets/imc/imc-back.png";
import temperatureCover from "../../../assets/temperature/temperature-cover.png";
import currenceCover from "../../../assets/currence/currence-cover.png";
import factorizationCover from "../../../assets/factorization/factorization-cover.png";

import LinkBox from "./LinkBox";

import "./homeTemplate.css";

export default function HomeTemplate() {
    return (
        <main>
            <nav className="main-nav">
                <div className="menu-links-container">
                    <div className="main-menu-item">
                        <LinkBox link="/bhaskara" imageSrc={bhaskaraCover} alt="Foto que ilustra a fórmula de Bhaskara" caption="Fórmula de Bhaskará" />
                    </div>

                    <div className="main-menu-item">
                        <LinkBox link="/financing" imageSrc={financingCover} alt="Foto de um carro com o fundo preto" caption="Financiamento" />
                    </div>

                    <div className="main-menu-item">
                        <LinkBox link="/pitagoras" imageSrc={pitagorasCover} alt="Foto que ilustra a fórmula do Teorema de Pitágoras" caption="Teorema de Pitágoras" />
                    </div>

                    <div className="main-menu-item">
                        <LinkBox link="/imc" imageSrc={imcCover} alt="Foto que ilustra o IMC" caption="IMC" />
                    </div>

                    <div className="main-menu-item">
                        <LinkBox link="/temperature" imageSrc={temperatureCover} alt="Foto que ilustra dois termômetros" caption="Conversor de Temperatura" />
                    </div>

                    <div className="main-menu-item">
                        <LinkBox link="/currence" imageSrc={currenceCover} alt="Imagem que ilutra a conversão de moedas" caption="Conversor de Moedas" />
                    </div>

                    <div className="main-menu-item">
                        <LinkBox link="/factorization" imageSrc={factorizationCover} alt="Imagem que ilustra fatoração de um número" caption="Fatorador" />
                    </div>
                </div>
            </nav>
        </main>
    )
}
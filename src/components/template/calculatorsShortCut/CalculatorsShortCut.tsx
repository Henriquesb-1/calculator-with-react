import { useState } from "react";
import Link from "./Link";

import "./calculatorsShortCut.css";
import "./menuHandler.css";

export default function CalculatorsShortCut() {
    const [menuVisibility, setMenuVisibility] = useState<boolean>(false);

    return (
        <>
            <div className={menuVisibility ? "side-menu-icon-open" : "side-menu-icon"}>
                <button onClick={() => setMenuVisibility(!menuVisibility)}>
                    <div className={`strip-one ${menuVisibility ? "strip-one-open" : ""}`}></div>
                    <div className={`strip-two ${menuVisibility ? "strip-two-open" : ""}`}></div>
                    <div className={`strip-three ${menuVisibility ? "strip-three-open" : ""}`}></div>
                </button>
            </div>

            <div className="all-pages-menu" style={{left: menuVisibility ? "0" : "-100%"}}>
                <nav>
                    <Link elementName="return" label="Main Page" link="/" />
                    <Link elementName="calculator-shortcut" label="Calculadora" link="/calculator" />
                    <Link elementName="bhaskara" label="Bhaskara" link="/bhaskara" />
                    <Link elementName="currence" label="Conversor" link="/currence" />
                    <Link elementName="factorization" label="Fatoração" link="/factorization" />
                    <Link elementName="financing" label="Financimento" link="/financing" />
                    <Link elementName="imc" label="Imc" link="/imc" />
                    <Link elementName="pitagoras" label="Pitagoras" link="/pitagoras" />
                    <Link elementName="temperature" label="Temperatura" link="/temperature" />
                </nav>
            </div>
        </>
    )
} 
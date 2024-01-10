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
                    <Link backgroundClassName="return" label="Main Page" link="/" />
                    <Link backgroundClassName="calculator-shortcut" label="Calculadora" link="/calculator" />
                    <Link backgroundClassName="bhaskara" label="Bhaskara" link="/bhaskara" />
                    <Link backgroundClassName="currence" label="Conversor" link="/currence" />
                    <Link backgroundClassName="factorization" label="Fatoração" link="/factorization" />
                    <Link backgroundClassName="financing" label="Financimento" link="/financing" />
                    <Link backgroundClassName="imc" label="Imc" link="/imc" />
                    <Link backgroundClassName="pitagoras" label="Pitagoras" link="/pitagoras" />
                    <Link backgroundClassName="temperature" label="Temperatura" link="/temperature" />
                </nav>
            </div>
        </>
    )
} 
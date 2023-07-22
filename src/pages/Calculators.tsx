import { useParams } from "react-router-dom";
import Bhaskara from "../components/bhaskara/Bhaskara";
import Currence from "../components/currence/Currence";
import CalculatorsShortCut from "../components/template/calculatorsShortCut/CalculatorsShortCut";
import Factorization from "../components/factorization/Factorization";
import Imc from "../components/imc/Imc";
import Pitagoras from "../components/pitagoras/Pitagoras";
import Financing from "../components/financing/Financing";
import Temperature from "../components/temperature/Temperature";
import Footer from "../components/template/footer/Footer";
import ChangeTheme from "../components/template/changeTheme/ChangeTheme";
import useTheme from "../context/hook/useTheme";

import "./pages.css";

export default function Calculators() {
    const { calculator } = useParams();
    const { theme } = useTheme();

    function renderCalculator() {
        switch (calculator) {
            case "bhaskara":
                return <Bhaskara />
            case "currence":
                return <Currence />
            case "factorization":
                return <Factorization />
            case "imc":
                return <Imc />
            case "pitagoras":
                return <Pitagoras />
            case "financing":
                return <Financing />
            case "temperature":
                return <Temperature />
            default:
                return <div>404 - Not Founded</div>
        }
    }

    return (
        <main className={`App ${theme}`} style={{backgroundColor: theme === "dark" ? "#111": "#999", height: "100vh"}}>
            <div className="shorcut-container" style={{display: "flex", justifyContent: "center"}}>
                <CalculatorsShortCut />
            </div>

            <ChangeTheme />

            {renderCalculator()}

            <Footer />
        </main>
    )
}

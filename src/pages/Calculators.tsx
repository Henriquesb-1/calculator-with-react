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

export default function Calculators() {
    const { calculator } = useParams();

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
        <>
            <div className="shorcut-container" style={{display: "flex", justifyContent: "center"}}>
                <CalculatorsShortCut />
            </div>
            {renderCalculator()}

            <Footer />
        </>
    )
}
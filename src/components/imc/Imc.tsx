import { useState } from "react";
import CalculatorPanel from "../template/calculatorPanel/CalculatorPanel";
import Input from "../template/calculatorPanel/Input";
import Buttons from "../template/calculatorPanel/Buttons";
import Results from "../template/calculatorPanel/Results";
import imcModel from "./imcModel";

export default function Imc() {
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    const [imcResults, setImcResults] = useState<imcModel>(new imcModel(weight, height));
    const [showResults, setShowResults] = useState<boolean>(false);

    function calc() {
        setImcResults(new imcModel(weight, height));
        setShowResults(true);
    }

    function renderResults() {
        if (weight === 0 || height === 0) {
            return <p>Informe a altura e o peso para continuar</p>
        } else {
            return (
                <>
                    <p style={{ backgroundColor: imcResults.getImcStatusColor(), padding: "10px" }}>Seu IMC é de {imcResults.getImc()}. {imcResults.getImcStatus()}</p>
                    {
                        imcResults.getImc() < 18.6 || imcResults.getImc() > 24.9
                            ? <p style={{ textAlign: "center" }}>Seu peso ideal é entre {imcResults.getIdealWeight().minimumWeight()}kg e {imcResults.getIdealWeight().maximumWeight()}kg</p>
                            : <></>
                    }
                </>
            )
        }
    }

    return (
        <CalculatorPanel>
            <>
                <Input label="Peso" value={weight} setValue={setWeight} />
                <Input label="Altura(ex: 180)" value={height} setValue={setHeight} />

                <Buttons submit={calc} setStates={[setWeight, setHeight]} reset={() => setShowResults(false)} />

                {showResults ? (
                    <Results>
                        {renderResults()}
                    </Results>
                ) : <></>}
            </>
        </CalculatorPanel>
    )
}
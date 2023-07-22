import { useState } from "react";

import CalculatorPanel from "../template/calculatorPanel/CalculatorPanel";
import Input from "../template/calculatorPanel/Input";
import Buttons from "../template/calculatorPanel/Buttons";
import Results from "../template/calculatorPanel/Results";
import BhaskaraModel from "./BhaskaraModel";

export default function Bhaskara() {
    const [aValue, setAValue] = useState<number>(0);
    const [bValue, setBValue] = useState<number>(0);
    const [cValue, setCValue] = useState<number>(0);

    const [results, setResults] = useState<BhaskaraModel>(new BhaskaraModel(aValue, bValue, cValue));

    const [showResults, setShowResults] = useState<boolean>(false);

    function calc() {
        const Bhaskara = new BhaskaraModel(aValue, bValue, cValue);
        setResults(Bhaskara);
        setShowResults(true);
    }

    function renderResults() {
        let finalElement = <></>;
        const deltaCalc = <p> Delta = {results.b}² - 4 * {results.a} * {results.c} = {results.getDelta()} </p>

        if (aValue === 0 && bValue === 0 && cValue === 0) {
            finalElement = <p>Por favor, informe um valor para continuar</p>
        } else if (results.getDelta() < 0) {
            finalElement =
                <>
                    {deltaCalc}
                    <p>Delta é menor que 0</p>
                </>
        } else if (!aValue && !cValue) {
            finalElement =
                <>
                    {deltaCalc}
                    <p>A variavel "A" ou "C" não possui um valor, portanto x', x'' serão igual a 0</p>
                </>
        } else {
            finalElement =
                <>
                    {deltaCalc}
                    <p>x' = -{results.b} - √{results.getDelta()} / 2 * {results.a} = {results.getX1()}</p>
                    <p>x'' = -{results.b} +  √{results.getDelta()} / 2 * {results.a} = {results.getX2()}</p>
                </>
        }

        return finalElement;
    }

    return (
        <CalculatorPanel>
            <>
                <form>
                    <Input label="Valor de A" value={aValue} setValue={setAValue} />
                    <Input label="Valor de B" value={bValue} setValue={setBValue} />
                    <Input label="Valor de C" value={cValue} setValue={setCValue} />
                </form>

                <Buttons submit={calc} setStates={[setAValue, setBValue, setCValue]} reset={() => setShowResults(false)} />

                {showResults ? (
                    <Results>
                        {renderResults()}
                    </Results>
                ) : <></>}
            </>
        </CalculatorPanel>
    )
}
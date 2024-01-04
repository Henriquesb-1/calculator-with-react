import { useState } from "react";
import CalculatorPanel from "../template/calculatorPanel/CalculatorPanel";
import Input from "../template/calculatorPanel/Input";
import Buttons from "../template/calculatorPanel/Buttons";
import Results from "../template/calculatorPanel/Results";
import factorizationModel from "./FactorizationModel";

import "./factorization.css";

export default function Factorization() {
    const [factorizationValue, setFactorizationValue] = useState<number>(0);

    const [results, setResults] = useState<factorizationModel>(new factorizationModel(factorizationValue));

    const [showResults, setShowResults] = useState<boolean>(false);

    function calc() {
        setResults(new factorizationModel(factorizationValue));
        setShowResults(true);
    }

    function renderResults() {
        const resultTable = results.getResult();
        return resultTable.map((result, index) => {
            return (
                <tr key={`result-${index}`}>
                    <td>{result.remaining}</td>
                    {index === 0 ? <td>0</td> : <td>{result.divideBy}</td>}
                </tr>
            )
        })
    }

    return (
        <CalculatorPanel>
            <>
                <Input label="Valor a ser fatorado" value={factorizationValue} setValue={setFactorizationValue} />

                <Buttons submit={calc} setStates={[setFactorizationValue]} />

                {showResults ? (
                    <Results>
                        <table className="factorization-results">
                            <thead>
                                <tr>
                                    <th>Restante</th>
                                    <th>Divido Por</th>
                                </tr>
                            </thead>

                            <tbody>
                                {renderResults()}
                            </tbody>
                        </table>
                    </Results>
                ) : <></>}
            </>
        </CalculatorPanel>
    )
}
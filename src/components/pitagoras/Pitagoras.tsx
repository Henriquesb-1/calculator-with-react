import { useState } from "react";

import CalculatorPanel from "../template/calculatorPanel/CalculatorPanel";
import Input from "../template/calculatorPanel/Input";
import Buttons from "../template/calculatorPanel/Buttons";
import Results from "../template/calculatorPanel/Results";
import PitagorasModel from "./PitagorasModel";

export default function Pitagoras() {
    const [hipotenusaOuCatetoB, setHipotenusaOuCatetoB] = useState<number>(0);
    const [catetoC, setCatetoC] = useState<number>(0);

    const [results, setResults] = useState<PitagorasModel>(new PitagorasModel(hipotenusaOuCatetoB, catetoC));

    const [showResults, setShowResults] = useState<boolean>(false);

    function calc() {
        setResults(new PitagorasModel(hipotenusaOuCatetoB, catetoC));
        setShowResults(true);
    }

    function renderResults() {
        if(hipotenusaOuCatetoB === 0 || catetoC === 0) {
            return <p>Preencha os campos para continuar</p>
        } else {
            return (
                <>
                    <div dangerouslySetInnerHTML={results.buildFormula()}></div>
                    <p>x = {results.getSumResult().finalResult()}</p>
                </>
            )
        }
    }

    return (
        <CalculatorPanel>
            <>
                <Input label="Hipotenusa ( A ) ou Cateto ( B )" value={hipotenusaOuCatetoB} setValue={setHipotenusaOuCatetoB} />
                <Input label="Cateto ( B )" value={catetoC} setValue={setCatetoC} />

                <Buttons submit={calc} setStates={[setHipotenusaOuCatetoB, setCatetoC]} reset={() => setShowResults(false)} />

                {showResults ? (
                    <Results>
                        {renderResults()}
                    </Results>
                ) : <></>}
            </>
        </CalculatorPanel>
    )
}
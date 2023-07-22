import { useState, useEffect } from "react";
import CalculatorPanel from "../template/calculatorPanel/CalculatorPanel";
import Input from "../template/calculatorPanel/Input";
import Buttons from "../template/calculatorPanel/Buttons";
import Results from "../template/calculatorPanel/Results";
import CurrenceModel from "./CurrenceModel";

export default function Currence() {
    const [currencePrice, setCurrencePrice] = useState<number>(0);

    const [realValue, setRealValue] = useState<number>(0);
    const [convertTo, setConvertTo] = useState<string>("dolar");
    
    const [results, setResults] = useState<CurrenceModel>(new CurrenceModel(realValue));

    const [showResults, setShowResults] = useState<boolean>(false);

    const willConvertToDolar = convertTo === "dolar";

    useEffect(() => {
        const currence = willConvertToDolar ? "USD-BRL" : "EUR-BRL";
        const response = fetch(`https://economia.awesomeapi.com.br/json/last/${currence}`);
        const currenceResponse = response.then(resp => resp.json())

        currenceResponse
            .then(resp => setCurrencePrice(willConvertToDolar ? resp.USDBRL.bid : resp.EURBRL.bid))
            .catch(err => setCurrencePrice(willConvertToDolar ? 5 : 5.30));
    }, [convertTo])

    async function calc() { 
        setResults(new CurrenceModel(realValue));
        setShowResults(true);
     }

    return (
        <CalculatorPanel>
            <>
                <form>
                    <Input label="Valor em reais" value={realValue} setValue={setRealValue} />

                    <Input selectInput label="Para" value={convertTo} setValue={setConvertTo}>
                        <>
                            <option value="dolar">Dólar</option>
                            <option value="euro">Euro</option>
                        </>
                    </Input>
                </form>

                <Buttons submit={calc} submitText="Converter" reset={() => setShowResults(false)} />

                {showResults ? (
                    <Results>
                        <p>R${results.currence} reais equivale a {convertTo === "dolar" ? "$" : "€"}{willConvertToDolar ? results.toDolar(currencePrice) : results.toEuro(currencePrice)} {willConvertToDolar ? "dólares" : "euros"}</p>
                    </Results>
                ) : <></>}
            </>
        </CalculatorPanel>
    )
}
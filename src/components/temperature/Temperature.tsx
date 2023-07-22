import { useState } from "react";

import CalculatorPanel from "../template/calculatorPanel/CalculatorPanel";
import Input from "../template/calculatorPanel/Input";
import Buttons from "../template/calculatorPanel/Buttons";
import Results from "../template/calculatorPanel/Results";
import TemperatureModel from "./TemperatureModel";

export default function Temperature() {
    const [temperatureInput, setTemperatureInput] = useState<number>(0);
    const [convertTo, setConvertTo] = useState<number>(0);

    const [results, setResults] = useState<TemperatureModel>(new TemperatureModel(temperatureInput));

    const [showResults, setShowResults] = useState<boolean>(false);

    function calc() {
        setResults(new TemperatureModel(temperatureInput));
        setShowResults(true);
    }

    function renderResults() {
        let element = <></>

        if (convertTo == 0) {
            element = <>
                <p>Para Fahrenheit:</p>
                <p>F° = ({results.temperature}°C * 1.8) + 32</p>
                <p>{results.temperature}°C equivale a {results.fromCelciusToFahrenheit()}° Fahrenheit</p>

                <p>Para Kelvins:</p>
                <p>C° = {results.temperature} + 273</p>
                <p>{results.temperature}°C equivale a {results.fromCelciusToKelvins()}° Kelvins</p>
            </>
        } else if (convertTo == 1) {
            element = <>
                <p>Para Celsius:</p>
                <p>F° = ({results.temperature}°C - 32) / 1.8</p>
                <p>{results.temperature}°F equivale a {results.fromFahrenheitToCelsius()}° Celsius</p>

                <p>Para Kelvins:</p>
                <p>K° = ({results.temperature}°F - 32) * 5/9 + 273</p>
                <p>{results.temperature}°F equivale a {results.fromFahrenheitToKelvins()}° Kelvins</p>
            </>
        } else if (convertTo == 2) {
            element = <>
                <p>Para Celsius:</p>
                <p>C° = {results.temperature} - 273</p>
                <p>{results.temperature}°K equivale a {results.fromKelvinsToCelsius()}° Celsius</p>

                <p>Para Fahrenheit</p>
                <p>F° = ({results.temperature} - 273) * 1.8 + 32</p>
                <p>{results.temperature}°K equivale a {results.fromKelvinsToFahrenheit()}° Fahrenheit</p>
            </>
        }

        return element;
    }

    return (
        <CalculatorPanel>
            <>
                <Input selectInput label="Convertendo" value={convertTo} setValue={setConvertTo}>
                    <>
                        <option value={0}>Celsius</option>
                        <option value={1}>Fahrenheit</option>
                        <option value={2}>Kelvins</option>
                    </>
                </Input>

                <Input label="Temperatura" value={temperatureInput} setValue={setTemperatureInput} />

                <Buttons submit={calc} setStates={[setTemperatureInput, setConvertTo]} reset={() => setShowResults(false)} />

                {showResults ? (
                    <Results>
                        <div style={{padding: "10px", backgroundColor: results.getBackgroundColor(convertTo), borderRadius: "15px"}}>
                            {renderResults()}
                        </div>
                    </Results>
                ) : <></>}
            </>
        </CalculatorPanel>
    )
}
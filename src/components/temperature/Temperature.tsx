import { useState } from "react";

import CalculatorPanel from "../template/calculatorPanel/CalculatorPanel";
import Input from "../template/calculatorPanel/Input";
import Buttons from "../template/calculatorPanel/Buttons";
import Results from "../template/calculatorPanel/Results";
import TemperatureModel from "./TemperatureModel";

export default function Temperature() {
    const [temperatureInput, setTemperatureInput] = useState<number>(0);
    const [convertTo, setConvertTo] = useState<number>(0);

    const [temperature, setTemperature] = useState<TemperatureModel>(new TemperatureModel(temperatureInput));

    const [showResults, setShowResults] = useState<boolean>(false);

    function calc() {
        setTemperature(new TemperatureModel(temperatureInput));
        setShowResults(true);
    }

    function renderResults() {
        let element = <></>

        if (convertTo == 0) {
            element = <>
                <p>Para Fahrenheit:</p>
                <p>F° = ({temperature.temperature}°C * 1.8) + 32</p>
                <p>{temperature.temperature}°C equivale a {temperature.fromCelciusToFahrenheit()}° Fahrenheit</p>

                <p>Para Kelvins:</p>
                <p>C° = {temperature.temperature} + 273</p>
                <p>{temperature.temperature}°C equivale a {temperature.fromCelciusToKelvins()}° Kelvins</p>
            </>
        } else if (convertTo == 1) {
            element = <>
                <p>Para Celsius:</p>
                <p>F° = ({temperature.temperature}°C - 32) / 1.8</p>
                <p>{temperature.temperature}°F equivale a {temperature.fromFahrenheitToCelsius()}° Celsius</p>

                <p>Para Kelvins:</p>
                <p>K° = ({temperature.temperature}°F - 32) * 5/9 + 273</p>
                <p>{temperature.temperature}°F equivale a {temperature.fromFahrenheitToKelvins()}° Kelvins</p>
            </>
        } else if (convertTo == 2) {
            element = <>
                <p>Para Celsius:</p>
                <p>C° = {temperature.temperature} - 273</p>
                <p>{temperature.temperature}°K equivale a {temperature.fromKelvinsToCelsius()}° Celsius</p>

                <p>Para Fahrenheit</p>
                <p>F° = ({temperature.temperature} - 273) * 1.8 + 32</p>
                <p>{temperature.temperature}°K equivale a {temperature.fromKelvinsToFahrenheit()}° Fahrenheit</p>
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
                        <div style={{padding: "10px", backgroundColor: temperature.getBackgroundColor(convertTo), borderRadius: "15px"}}>
                            {renderResults()}
                        </div>
                    </Results>
                ) : <></>}
            </>
        </CalculatorPanel>
    )
}
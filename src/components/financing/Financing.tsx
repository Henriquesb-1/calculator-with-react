import { useState } from "react";
import CalculatorPanel from "../template/calculatorPanel/CalculatorPanel";
import Input from "../template/calculatorPanel/Input";
import Buttons from "../template/calculatorPanel/Buttons";
import Results from "../template/calculatorPanel/Results";
import FinancingModel from "./FinancingModel";

export default function Financing() {
    const [vehiclePrice, setVehiclePrice] = useState<number>(0);
    const [entryValue, setEntryValue] = useState<number>(0);
    const [installments, setInstallments] = useState<number>(12);

    const [results, setResults] = useState<FinancingModel>(new FinancingModel(vehiclePrice, entryValue, installments));

    const [showResults, setShowResults] = useState<boolean>(false);

    function calc() {
        setResults(new FinancingModel(vehiclePrice, entryValue, installments));
        setShowResults(true);
    }

    function renderResults() {
        let finalElement = <></>
        const isEntryValueGreaterThanVehicleValue = vehiclePrice < entryValue;
        const isEntryValueEquelToVehicleValue = vehiclePrice === entryValue;

        if (vehiclePrice === 0) {
            finalElement = <p>Por favor, informe o valor do veiculo para continar</p>
        } else if (isEntryValueEquelToVehicleValue || isEntryValueGreaterThanVehicleValue) {
            finalElement = <p>O valor da entrada não pode ser {isEntryValueEquelToVehicleValue ? "igual ao " : "maior do que "} valor do veiculo</p>
        } else {
            finalElement =
                <>
                    <p>Valor financiado: R${results.getValueFinanced()}</p>
                    <p>Valor das parcelas: R${results.getInstallmentsValue()}</p>
                    <p>Valor total pago: R${results.getTotalWithEntry()}</p>
                    <p>Total de juros pago: R${results.getTotalFeesPaid()}</p>
                </>
        }

        return finalElement;
    }

    return (
        <CalculatorPanel>
            <>
                <Input label="Qual o valor do veículo?" value={vehiclePrice} setValue={setVehiclePrice} />
                <Input label="Quanto pretende dar de entrada?" value={entryValue} setValue={setEntryValue} />
                <Input selectInput label="Quanto pretende dar de entrada?" value={installments} setValue={setInstallments}>
                    <>
                        <option value={12}>12</option>
                        <option value={24}>24</option>
                        <option value={36}>36</option>
                        <option value={48}>48</option>
                        <option value={60}>60</option>
                        <option value={72}>72</option>
                    </>
                </Input>

                <Buttons submit={calc} setStates={[setVehiclePrice, setEntryValue]} reset={() => setShowResults(false)} />

                {showResults ? (
                    <Results>
                        {renderResults()}
                    </Results>
                ) : <></>}
            </>
        </CalculatorPanel>
    )
}
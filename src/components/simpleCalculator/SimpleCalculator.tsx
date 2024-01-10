import { useState } from "react";

import CalculatorPanel from "../template/calculatorPanel/CalculatorPanel";
import Operation from "./Operation";
import CalculatorButton from "./CalculatorButton";
import Calculator from "./Calculator";

import "./calculator.css";

export default function SimpleCalculator() {
    let [calculatorDisplay, setCalculatorDisplay] = useState<string>("");
    const [currentMemory, setCurrentMemory] = useState<number>(0);
    const [currentOperation, setCurrentOperation] = useState<Operation>();
    
    const [calculator] = useState<Calculator>(new Calculator());

    function addNumber(number: number) {    
        setCalculatorDisplay(calculatorDisplay += number);
        calculator.memory[currentMemory] = Number.parseFloat(calculatorDisplay);
        console.log(calculator.memory);
    }

    function addComma() {
        if(!calculatorDisplay) setCalculatorDisplay("0.");
        else {
            setCalculatorDisplay(calculatorDisplay + ".");
        }
    }

    function clean() {
        setCalculatorDisplay("");
        setCurrentMemory(0);
        calculator.cleanMemory();
    }

    function result() {
        setCalculatorDisplay(`${calculator.calculate(currentOperation || Operation.BLANK)}`);
        setCurrentMemory(0);
        calculator.cleanMemory();
    }

    function cleanLastNumber() {
        const calculatorDisplayValueSplited = calculatorDisplay.split("");

        if(calculatorDisplayValueSplited.length === 1) setCalculatorDisplay("");
        else {
            const lastValueIndex = calculatorDisplayValueSplited.length - 1;
            calculatorDisplayValueSplited.splice(lastValueIndex, 1);

            setCalculatorDisplay(calculatorDisplayValueSplited.join(""));
        }
    }

    function changeNumberSign() {
        const parseDisplayToFloat = Number.parseFloat(calculatorDisplay);
        
        if(parseDisplayToFloat) {
            if(parseDisplayToFloat > 0) {
                const negativeNumber = -Math.abs(parseDisplayToFloat);
                setCalculatorDisplay(negativeNumber.toString());
            } else {
                const positiveNumber = Math.abs(parseDisplayToFloat);
                setCalculatorDisplay(positiveNumber.toString());
            }
        }
    }

    function calc(operation: Operation) {
        if(operation === Operation.SQUARE) {
            setCalculatorDisplay(`${calculator.calculate(Operation.SQUARE)}`);
            setCurrentMemory(0);
            calculator.cleanMemory();
            return;
        }

        if (currentMemory === 0) {
            calculator.memory[0] = Number.parseFloat(calculatorDisplay);
            setCurrentMemory(1);
            setCalculatorDisplay("");
            setCurrentOperation(operation);
        } else {
            calculator.calculate(currentOperation || operation);
            setCalculatorDisplay("");
            setCurrentOperation(operation);
        }
    }

    return (
        <CalculatorPanel>
            <div className="calculator">
                <div className="calculator-screen">
                    <div className="previous-value">
                        <span>{currentMemory === 0 ? "" : `${calculator.memory[0]} ${calculator.getCurrentOperationInString(currentOperation || Operation.SUM)}`}</span>
                    </div>

                    <div className="current-value">
                        <span>{calculatorDisplay || "0"}</span>
                    </div>
                </div>

                <div>
                    <div className="calculator-buttons">
                        <CalculatorButton title="Limpar" label="C" onClick={() => clean()} />
                        <CalculatorButton title="Raiz Quadrada" label="V2" onClick={() => calc(Operation.SQUARE)} />
                        <CalculatorButton title="Apagar" label="<-" onClick={() => cleanLastNumber()} />
                        <CalculatorButton title="Operação de divisão" label="/" isOperation onClick={() => calc(Operation.DIVISION)} />
                    </div>

                    <div className="calculator-buttons">
                        <CalculatorButton title="Adicionar numero 7" label="7" onClick={() => addNumber(7)} />
                        <CalculatorButton title="Adicionar numero 8" label="8" onClick={() => addNumber(8)} />
                        <CalculatorButton title="Adicionar numero 9" label="9" onClick={() => addNumber(9)} />
                        <CalculatorButton title="Operação de multiplicação" label="X" isOperation onClick={() => calc(Operation.MULTIPLICATION)} />
                    </div>

                    <div className="calculator-buttons">
                        <CalculatorButton title="Adicionar numero 4" label="4" onClick={() => addNumber(4)} />
                        <CalculatorButton title="Adicionar numero 5" label="5" onClick={() => addNumber(5)} />
                        <CalculatorButton title="Adicionar numero 6" label="6" onClick={() => addNumber(6)} />
                        <CalculatorButton title="Operação de subtração" label="-" isOperation onClick={() => calc(Operation.SUBTRACTION)} />
                    </div>

                    <div className="calculator-buttons">
                        <CalculatorButton title="Adicionar numero 3" label="3" onClick={() => addNumber(3)} />
                        <CalculatorButton title="Adicionar numero 2" label="2" onClick={() => addNumber(2)} />
                        <CalculatorButton title="Adicionar numero 1" label="1" onClick={() => addNumber(1)} />
                        <CalculatorButton title="Operação de adição" label="+" isOperation onClick={() => calc(Operation.SUM)} />
                    </div>

                    <div className="calculator-buttons">
                        <CalculatorButton title="Adicionar numero " label="+/-" onClick={() => changeNumberSign()} />
                        <CalculatorButton title="Adicionar numero " label="0" onClick={() => addNumber(0)} />
                        <CalculatorButton title="Adicionar numero " label="," onClick={() => addComma()} />
                        <CalculatorButton title="Ver resultado" label="=" isOperation onClick={() => result()} />
                    </div>
                </div>
            </div>
        </CalculatorPanel>
    )
}
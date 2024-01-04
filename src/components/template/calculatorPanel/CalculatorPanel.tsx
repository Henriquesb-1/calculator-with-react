import React from "react"

import "./calculatorPane.css";

interface CalculatorPanelProps {
    children: React.JSX.Element;
}

export default function CalculatorPanel({ children }: CalculatorPanelProps) {
    return (
        <div className="calculator-panel">
            {children}
        </div>
    )
}
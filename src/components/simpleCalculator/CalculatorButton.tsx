import "./calculatorButton.css";

interface CalculatorButtonProps {
    label: string;
    onClick: () => void;
    title: string;
    isOperation?: boolean;
}

export default function CalculatorButton({ onClick, title, label, isOperation }: CalculatorButtonProps) {
    return (
        <div className="calculator-button">
            <button style={{width: isOperation ? "107px" : ""}} onClick={onClick} title={title}>{label}</button>
        </div>
    )
}
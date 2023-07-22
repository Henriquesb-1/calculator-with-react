import { Dispatch, SetStateAction } from "react";
import "./buttons.css";

interface ButtonsProps {
    submitText?: string;
    resetText?: string;

    submit: () => void;
    setStates?: Dispatch<SetStateAction<number>>[];
    reset?: () => void
}


export default function Buttons({ submitText, resetText, submit, setStates, reset }: ButtonsProps) {
    const resetState = (setStates: Dispatch<SetStateAction<number>>[]): void => setStates.forEach(setState => setState(0));
    
    return (
        <div className="buttons">
            <div className="submit-button button">
                <button onClick={submit}>{submitText || "Calcular"}</button>
            </div>
            <div className="reset-button button">
                <button onClick={() => {
                    if(setStates) resetState(setStates);
                    if(reset) reset();
                }}>{resetText || "Resetar"}</button>
            </div>
        </div>
    )
}
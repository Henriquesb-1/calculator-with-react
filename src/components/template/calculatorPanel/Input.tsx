import React, { Dispatch, SetStateAction } from "react";

import "./input.css";

interface InputProps {
    selectInput?: boolean;
    label: string;
    value: number | string;
    setValue: Dispatch<SetStateAction<any>>;

    children?: React.JSX.Element;
}

export default function Input({ selectInput, label, value, setValue, children }: InputProps) {
    return (
        <>
            {!selectInput  ? (
                <div className="input-container">
                    <div className="input-label">
                        <label>{label}</label>
                    </div>

                    <div className="input">
                        <input type="text" value={value} onChange={e => setValue(Number.parseInt(e.target.value || "0"))} />
                    </div>
                </div>
            ) : (
                <div className="input-container">
                    <div className="input-label">
                        <label htmlFor="">{label}</label>
                    </div>

                    <div className="input">
                        <select name="" id="" value={value} onChange={e => setValue(e.target.value)}>
                            {children}
                        </select>
                    </div>
                </div>
            )}
        </>
    )
}
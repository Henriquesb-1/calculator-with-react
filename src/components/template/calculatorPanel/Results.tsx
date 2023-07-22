import React from "react"

import "./results.css";

interface ResultsProps {
    children: React.JSX.Element
}

export default function Results({ children }: ResultsProps) {
    return (
        <div className="results">
            {children}
        </div>
    )
}
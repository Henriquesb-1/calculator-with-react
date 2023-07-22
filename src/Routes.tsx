import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Calculators from "./pages/Calculators";

export default function RoutesControl() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:calculator" element={<Calculators />} />
        </Routes>
    )
}
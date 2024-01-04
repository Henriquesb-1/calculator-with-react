import sun from "../../../assets/svg/sun.svg";
import moon from "../../../assets/svg/moon.svg";

import "./changeTheme.css";
import useTheme from "../../../context/hook/useTheme";

export default function ChangeTheme() {
    const { theme, changeTheme } = useTheme();

    return (
        <div className="theme-container" onClick={() => changeTheme(theme === "dark" ? "light" : "dark")} style={{backgroundColor: theme === "dark" ? "#3d3d3d" : "#ff09"}}>
            <div className="theme-icon" style={{right: theme === "dark" ? "0" : "-50px"}}>
                {theme === "dark"
                    ? <img src={moon} alt="moon icon" />
                    : <img src={sun} alt="sun icon" />
                }
            </div>
        </div>
    )
}
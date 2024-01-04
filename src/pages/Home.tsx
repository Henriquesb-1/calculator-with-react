import ChangeTheme from "../components/template/changeTheme/ChangeTheme";
import Footer from "../components/template/footer/Footer";
import HomeTemplate from "../components/template/home/HomeTemplate";
import useTheme from "../context/hook/useTheme";

import "./pages.css";

export default function Home() {
    const { theme } = useTheme();

    return (
        <main className={`App ${theme}`} style={{backgroundColor: theme === "dark" ? "#111": "#aaa"}}>
            <ChangeTheme />
            <HomeTemplate />
            <Footer />
        </main>
    )
}

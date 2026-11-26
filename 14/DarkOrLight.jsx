import {useCallback, useState} from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props){
    const [theme, setTheme] = useState("Light");

    const toggleTheme = useCallback(() => {
        if (theme == "Light") {
            setTheme("dark");
        }else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme]);

        return (
            <ThemeContext.Provider value={{ theme, toggleTheme}}>
                <MainContent />
            </ThemeContext.Provider>
        );

}
export default DarkOrLight;
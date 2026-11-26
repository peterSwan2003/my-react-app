import { useContext } from "react";
import { ThemeContext } from "../App";
import "./Theme.css";
const Theme = () => {
  const { theme, ChangeTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h1>{theme}</h1>
      <button onClick={ChangeTheme}>Change theme</button>
    </div>
  );
};

export default Theme;

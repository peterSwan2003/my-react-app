import { createContext, useState, useReducer } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Logo from "./components/Logo";
import Top from "./components/Top";
import State from "./components/State";
import TaskState from "./components/TaskState";
import StateEx from "./components/StateEx";
// import "./components/TaskState.css";
// import "./components/Theme.css";
import TaskProps from "./components/TaskProps";
import Api from "./components/Api";
import Loading from "./components/Loading";
import ApiTask from "./components/ApiTask";
import "./components/ApiTask.css";
import Theme from "./components/Theme";
import Reducer from "./components/Reducer";
import Reducer2 from "./components/Reducer2";
import Reducer3 from "./components/Reducer3";
import TaskReducer from "./components/TaskReducer";
import Optimistic from "./components/Optimistic";
import Optimistic2 from "./components/Optimistic2";
import Optimistic3 from "./components/Optimistic3";
import Ref from "./components/Ref";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// إنشاء كونتيكست
// export const UserNameContext = createContext();
export const ThemeContext = createContext();
// function
function sayHello() {
  console.log("hello world");
}
// arrow function
const sayHello2 = () => {
  console.log("hello world2");
};
// arrow function with value for useing
const sayHello4 = (name) => {
  console.log(`hello${name}`);
};
function App() {
  // const x = "anna";
  // const z = "peter";
  // const userName2 = "peter";
  const [theme, setTheme] = useState("light");
  const ChangeTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      {/* <Logo z={z} /> */}
      {/* <TaskState /> */}
      {/* <ThemeContext.Provider value={{ theme, ChangeTheme }}>
        <Theme />
      </ThemeContext.Provider> */}
      {/* <UserNameContext.Provider value={userName2}>
        <Top />
      </UserNameContext.Provider> */}
      {/* ///////// */}
      {/*//////////////////////// */}
      {/* <Api /> */}
      <ApiTask />
      {/* <button type="button" onClick={sayHello}>
        click me
      </button>
      <button type="button" onClick={sayHello2}>
        click me2
      </button>
      <button type="button" onClick={() => console.log("hello")}>
        click me3
      </button>
      <button type="button" onClick={() => sayHello4("peter")}>
        click me4
      </button> */}
      {/* ////2/////// */}
      {/* <State /> */}
      {/* /..///.//./././//. */}
      {/* <StateEx /> */}
      {/* ///////////////////////// */}
      {/* <Loading /> */}
      {/* .................................. */}
      {/* <Reducer /> */}
      {/* //////////////////////////// */}
      {/* <Reducer2 /> */}
      {/* <Reducer3 /> */}
      {/* <TaskReducer /> */}
      {/* ......,//////////////////////////////// */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* <Optimistic /> */}
      {/* <Optimistic2 /> */}
      {/* <Optimistic3 /> */}
      {/* .................... */}
      {/* <Ref /> */}

      {/* <BrowserRouter>
        <div style={{ padding: "20px" }}>
          <nav>
            <Link to="/" style={{ marginRight: "20px" }}>
              الصفحة الرئيسية
            </Link>
            <Link to="/about" style={{ marginRight: "20px" }}>
              عن التطبيق
            </Link>
            <Link to="/contact" style={{ marginRight: "20px" }}>
              تواصل معنا
            </Link>
          </nav>
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter> */}
      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section> */}
    </>
  );
}

export default App;

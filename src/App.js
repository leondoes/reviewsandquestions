import "./styles.css";
import React from "react";
import package_json from "../package.json";
import Main from "./components/Main";

document.body.style.margin = 0;
document.title = "Yotpo Review";


window.__leonVersion = package_json.version;

const App = () => (
  <Main/>
);

export default App;
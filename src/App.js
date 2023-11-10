import "./styles.css";
import React from "react";
import package_json from "../package.json";
import RandQ from "./components/RandQ";
import {PhoneViewProvider} from './contexts/phoneViewContext';


document.body.style.margin = 0;
document.title = "Reviews & Questions";


window.__leonVersion = package_json.version;

const App = () => {
  return (
    <PhoneViewProvider>
      <RandQ />
    </PhoneViewProvider>
  );
};

export default App;
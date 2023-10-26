import "./styles.css";
import React from "react";
import package_json from "../package.json";
import ReviewsAndQuestions from "./components/ReviewsAndQuestions";

document.body.style.margin = 0;
document.title = "Reviews & Questions";


window.__leonVersion = package_json.version;

const App = () => (
  <ReviewsAndQuestions/>
);

export default App;
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker(); //default hook of the usepromise tracker
  return (
    promiseInProgress && (
      <div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader type="ThreeDots" color="blue" height="100" width="100" />
      </div>
    )
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadingIndicator /> {/* Calling in the start based on hook value */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

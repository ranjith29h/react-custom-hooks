import React from "react";
import ReactDOM from "react-dom";
import { useRefInput } from "./useRefInput";

function App() {
  const {
    bind: bindName,
    resetValue: resetname,
    getValue: getname,
    setFocus: setFocusName
  } = useRefInput("");

  const {
    bind: bindMail,
    resetValue: resetMail,
    getValue: getMail
  } = useRefInput("");

  const handleSubmit = evt => {
    evt.preventDefault();
    alert(`Name ${getname()}`);
    alert(`Mail ${getMail()}`);
    resetname();
    resetMail();
    setFocusName();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" {...bindName} />
        <input type="text" {...bindMail} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

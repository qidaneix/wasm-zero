import { useState } from "react";
import { pyodideReadyPromise } from "./pyodide/index.tsx";
const pyodide = await pyodideReadyPromise;
pyodide.globals.set("square", (x) => x * x);

function App() {
  const [value, setValue] = useState("sum([1, 2, 3, 4, 5])");
  const [result, setResult] = useState("");

  const evaluatePython = async () => {
    try {
      const output = pyodide.runPython(value);
      console.log(typeof output, output);
      console.log(
        typeof pyodide.globals.get("x").toJs(),
        pyodide.globals.get("x").toJs()
      );
      setResult(output);
    } catch (err) {
      setResult(JSON.stringify(err));
    }
  };

  return (
    <>
      <p>
        You can execute any Python code. Just enter something in the box below
        and click the button.
      </p>
      <textarea
        id="code"
        value={value}
        onInput={(e) => setValue(e.currentTarget.value)}
      />
      <button onClick={evaluatePython}>Run</button>
      <br />
      <br />
      <div>Output:</div>
      <textarea value={result} style={{ width: "100%" }} rows={6} readOnly />
    </>
  );
}

export default App;

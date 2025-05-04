async function main() {
  const pyodide = await loadPyodide();
  return pyodide;
  //   console.log(pyodide);
  //   console.log(
  //     pyodide.runPython(`
  //         import sys
  //         sys.version
  //     `)
  //   );
  //   console.log(pyodide.runPython(`print(1 + 2)`));
}

export const pyodideReadyPromise = main();

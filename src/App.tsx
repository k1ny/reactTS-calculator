import { useState } from "react";
import { Button } from "./components/ui/button";
import "./global.css";
function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  const addNumber = (numeric: number) => {
    setCurrentValue((prev) =>
      prev === "0" ? String(numeric) : prev + numeric,
    );
  };

  const addOperation = (operation: string) => {
    if (currentValue !== "0") {
      if (previousValue === null) {
        setPreviousValue(currentValue);
      } else if (operation) {
        calculate();
      }
      setOperation(operation);
      setCurrentValue("0");
    }
  };

  const calculate = () => {
    if (operation && previousValue !== null) {
      const prev = Number(previousValue);
      const current = Number(currentValue);
      let result = 0;

      switch (operation) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "*":
          result = prev * current;
          break;
        case "/":
          if (prev === 0) result = NaN;
          else result = prev / current;
          break;
        default:
          return;
      }

      setCurrentValue(String(result));
      setPreviousValue(null);
      setOperation(null);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-[400px] flex flex-col border-2 p-2 rounded-lg gap-1">
          <div className="bg-black h-16 rounded-lg text-white flex justify-end items-center text-5xl p-2 overflow-hidden">
            {currentValue}
          </div>
          <div className="grid grid-cols-4 gap-1">
            <Button
              className="button-number col-span-2"
              onClick={() => {
                setCurrentValue("0");
                setPreviousValue(null);
                setOperation(null);
              }}
            >
              C
            </Button>
            <Button
              className="button-number"
              onClick={() => setCurrentValue(currentValue.slice(0, -1))}
            >
              {"<="}
            </Button>
            <Button
              className="button-operator"
              onClick={() => addOperation("/")}
            >
              /
            </Button>
            <Button className="button-number" onClick={() => addNumber(7)}>
              7
            </Button>
            <Button className="button-number" onClick={() => addNumber(8)}>
              8
            </Button>
            <Button className="button-number" onClick={() => addNumber(9)}>
              9
            </Button>
            <Button
              className="button-operator"
              onClick={() => addOperation("*")}
            >
              *
            </Button>
            <Button className="button-number" onClick={() => addNumber(4)}>
              4
            </Button>
            <Button className="button-number" onClick={() => addNumber(5)}>
              5
            </Button>
            <Button className="button-number" onClick={() => addNumber(6)}>
              6
            </Button>
            <Button
              className="button-operator"
              onClick={() => addOperation("-")}
            >
              -
            </Button>
            <Button className="button-number" onClick={() => addNumber(1)}>
              1
            </Button>
            <Button className="button-number" onClick={() => addNumber(2)}>
              2
            </Button>
            <Button className="button-number" onClick={() => addNumber(3)}>
              3
            </Button>
            <Button
              className="button-operator"
              onClick={() => addOperation("+")}
            >
              +
            </Button>
            <Button
              className="button-number col-span-3"
              onClick={() => addNumber(0)}
            >
              {" "}
              0{" "}
            </Button>
            <Button className="button-operator" onClick={calculate}>
              {" "}
              ={" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

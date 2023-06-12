import { useState, useEffect, useRef } from "react";
import styles from "./Calculator.module.css";
import { Button } from "react-bootstrap";

const Calculator = () => {
  const [num1, setNum1] = useState([]);
  const [result, setResult] = useState("");

  const clickHandler1 = (input) => {
    const lastItem = num1[num1.length - 1];
    if (
      typeof input === "number" ||
      (typeof input === "string" &&
        !["+", "-", "*", "/", "%"].includes(lastItem))
    ) {
      setNum1((prevNumbers) => [...prevNumbers, input.toString()]);
    }
  };

  const resultHandler = () => {
    const joinedExpression = num1.join("");
    const result1 = eval(joinedExpression);
    setResult(result1);
  };

  const deleteHandler = () => {
    const delete1 = num1.splice(-1);
    setNum1([...num1]);
    console.log(num1);
  };

  const clearHandler = () => {
    setNum1([]);
    setResult("");
  };

  return (
    <>
      <h1>Calculator</h1>
      <div className={styles.mdisplay}>
        <div className={styles.display}>
          <p style={{ paddingTop: "10px" }}>{num1}</p>
          <br />
          <hr />
          <p style={{ paddingBottom: "10px" }}>{result}</p>
        </div>
      </div>

      <hr />
      <div className={styles.button}>
        <div className={styles.button1}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "00", "."].map((number) => (
            <Button
              key={number}
              onClick={() => clickHandler1(number)}
              className={styles.buttons}
            >
              {number}
            </Button>
          ))}
          {["+", "-", "*", "/", "%"].map((operator, index) => (
            <Button
              key={index}
              variant="danger"
              onClick={() => {
                clickHandler1(operator);
              }}
              className={styles.buttons}
            >
              {operator}
            </Button>
          ))}

          <Button
            variant="warning"
            onClick={resultHandler}
            className={styles.buttons}
          >
            =
          </Button>
          <Button
            variant="warning"
            onClick={clearHandler}
            className={styles.buttons}
          >
            AC
          </Button>
          <Button
            variant="warning"
            onClick={deleteHandler}
            className={styles.buttons}
          >
            <i class="bi bi-backspace"></i>
          </Button>
        </div>
      </div>
    </>
  );
};
export default Calculator;

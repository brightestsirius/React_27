import React, { useState, useRef, useEffect } from "react";
import "./style.sass";

// lifting state up

export default function Counter({liftingCounter, liftingAddValue}) {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(1);
  const [exp, setExp] = useState(true);

  const formRef = useRef(); // { current: }
  const selectRef = useRef();

//   let someValue = useMemo(() => 10, [counter]); // useMemo

  const DEFAULT_DELIVERY = {
    np: true,
    up: false,
    personal: false,
  };

  const handleDecrement = () => setCounter((prevState) => prevState - 1);

  const handleIncrement = () => setCounter((prevState) => prevState + 1);

  const handleChange = (e) => setValue(+e.target.value);

  const handleExp = (e) => setExp(e.target.checked);

  const handleReset = () => {
    formRef.current.reset();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const calculateForm = formRef.current;
    const selectedDelivery = calculateForm.querySelector(
      `input[type=radio][name=delivery]:checked`
    ).value;
    //console.log(selectedDelivery);

    const selectValue = +selectRef.current.value;

    let result = value;
    if (exp) result = Math.pow(result, selectValue);

    setCounter((prevState) => prevState + result);
  };

  useEffect(() => {
    console.log(`in useEffect for counter`, counter);
    liftingCounter(counter);
  }, [counter]);

  useEffect(() => {
    liftingAddValue(value);
  }, [value])

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <span>{counter}</span>
      <button onClick={handleIncrement}>+</button>

      <form onSubmit={handleSubmit} ref={formRef}>
        <label>
          Add value:{" "}
          <input type="number" defaultValue={value} onChange={handleChange} />
        </label>

        <label>
          Exponentiation{" "}
          <input type="checkbox" defaultChecked={exp} onChange={handleExp} />
        </label>

        <fieldset>
          <legend>Choose delivery</legend>
          <label>
            Нова пошта:{" "}
            <input
              type="radio"
              name="delivery"
              value="np"
              defaultChecked={DEFAULT_DELIVERY.np}
            />
          </label>

          <label>
            UP:{" "}
            <input
              type="radio"
              name="delivery"
              value="up"
              defaultChecked={DEFAULT_DELIVERY.up}
            />
          </label>

          <label>
            Personal:{" "}
            <input
              type="radio"
              name="delivery"
              value="personal"
              defaultChecked={DEFAULT_DELIVERY.personal}
            />
          </label>
        </fieldset>

        <label>
          Choose exponentiation value:{" "}
          <select ref={selectRef}>
            <option value="2">Two</option>
            <option value="3">Три</option>
            <option value="4">4</option>
          </select>
        </label>

        <button>Calculate</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}

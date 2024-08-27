import { useState } from "react";
import { Textarea } from "@/components";
import "./Input.css";

const Input = ({ type, name, label, required, onChange }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleFocus = () => {
    setIsValid(true);
    setError("");
  };

  return (
    <label className="label">
      {label && <span className="label__text">{label}</span>}

      {type === "textarea" ? (
        <Textarea
          name={name}
          isValid={isValid}
          required={required}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      ) : (
        <input
          type={type}
          name={name}
          className={`input ${!isValid ? "invalid" : ""}`}
          required={required}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      )}

      {error && (
        <span className="input__error">
          <b>❌</b> {error}
        </span>
      )}
    </label>
  );
};

export default Input;

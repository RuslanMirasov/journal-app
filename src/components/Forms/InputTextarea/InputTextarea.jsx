const InputTextarea = ({
  name,
  isValid,
  value,
  required,
  onChange,
  onFocus,
}) => {
  return (
    <textarea
      name={name}
      className={`input ${!isValid ? "invalid" : ""}`}
      required={required}
      onChange={onChange}
      onFocus={onFocus}
      value={value}
    ></textarea>
  );
};

export default InputTextarea;

const InputText = ({
  type,
  name,
  isValid,
  value,
  required,
  onChange,
  onFocus,
}) => {
  return (
    <input
      type={type}
      name={name}
      className={`input ${!isValid ? "invalid" : ""}`}
      required={required}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};

export default InputText;

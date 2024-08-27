import "./Form.css";

const Form = ({ onSubmit, children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) {
      return;
    }

    const form = e.target;
    const formData = Object.fromEntries(new FormData(form).entries());
    onSubmit(formData);
  };

  return (
    <form action="#" className="form" noValidate onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;

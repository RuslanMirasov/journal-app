import { Section, Form, Button, Input } from "@/components";
import "./EntryForm.css";

const EntryForm = () => {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Section>
      <h2 className="form-title">New entry</h2>
      <Form onSubmit={handleSubmit}>
        <Input type="text" label="Motto" name="motto" required />
        <Input type="textarea" label="Notes" name="notes" required />

        <Button type="submit">Create</Button>
      </Form>
    </Section>
  );
};

export default EntryForm;

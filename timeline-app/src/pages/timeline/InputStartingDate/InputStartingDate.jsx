import { Formik, Field, Form } from "formik";

const InputStartingDate = ({ value, onChange }) => {
  return (
    <Formik
      initialValues={{ month: "", day: "", year: "" }}
      onSubmit={(values) =>
        onChange(`${values.month}/${values.day}/${values.year}`)
      }
    >
      <button type="submit">submit</button>
    </Formik>
  );
};

export default InputStartingDate;

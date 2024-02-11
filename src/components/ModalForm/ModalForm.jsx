import { Formik, Form, Field } from 'formik';

export const ModalForm = ({ initialValues, onSubmit }) => {
  const handleSubmit = values => {
    onSubmit(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Name
            <Field name="name" type="text" />
          </label>
          <br />
          <label>
            Phone
            <Field name="phone" type="tel" />
          </label>
          <br />
          <label>
            Address
            <Field name="address" type="text" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Update
          </button>
        </Form>
      )}
    </Formik>
  );
};

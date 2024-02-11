import { Formik } from 'formik';
import { Formstyled, Input } from './ModalForm.styled';
import { ButtonUpdate } from 'components/Modal/Modal.styled';

export const ModalForm = ({ initialValues, onSubmit }) => {
  const handleSubmit = values => {
    onSubmit(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Formstyled>
          <label>
            Name
            <Input name="name" type="text" />
          </label>
          <br />
          <label>
            Phone
            <Input name="phone" type="tel" />
          </label>
          <br />
          <label>
            Address
            <Input name="address" type="text" />
          </label>
          <ButtonUpdate type="submit" disabled={isSubmitting}>
            Update
          </ButtonUpdate>
        </Formstyled>
      )}
    </Formik>
  );
};

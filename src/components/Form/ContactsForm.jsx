import { FaPhoneAlt } from 'react-icons/fa';
import { GiGingerbreadMan } from 'react-icons/gi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  BtnPhone,
  ErrorText,
  FieldInput,
  Formstyled,
  Label,
} from './ContactsForm.styled';
import { useAddContactMutation } from 'store/redux/contact/contactAPI';
import { toast } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const initialValues = {
  name: '',
  phone: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'the name is not entered correctly'
    )
    .required(),
  phone: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'the number is not entered correctly, parentheses and can start with +'
    )
    .required(),
});

export const ContactsForm = () => {
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleAddMaterial = async values => {
    try {
      await addContact(values);
      toast.success('Add contact');
    } catch (error) {
      toast.error('Ошибка при добавлении материала');
      console.log(error);
    }
  };

  return (
    <div>
      <Formik
        onSubmit={(values, { resetForm }) => {
          handleAddMaterial({ ...values });
          resetForm();
        }}
        initialValues={initialValues}
        validationSchema={schema}
      >
        <Formstyled autoComplete="off">
          <Label>
            <div>
              <GiGingerbreadMan /> Name
            </div>
          </Label>
          <FieldInput name="name" type="text" />
          <FormError name="name" component="span" />

          <Label>
            <div>
              <FaPhoneAlt /> Phone
            </div>
          </Label>
          <FieldInput name="phone" type="tel" />
          <FormError name="phone" component="span" />

          <BtnPhone type="submit" disabled={isLoading}>
            Add contact <AiOutlineUserAdd />
          </BtnPhone>
        </Formstyled>
      </Formik>
    </div>
  );
};

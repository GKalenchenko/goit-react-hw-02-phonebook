import PropTypes from 'prop-types';
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';

const MIN_PHONE_LENGTH = 9999;
const MAX_PHONE_LENGTH = 1000000000000;

const VALIDATION_MESSAGES = {
  onTypeErrorNumber: 'Phone number can only contain numbers',
  onMinNumber: 'Phone number is too short',
  onMaxNumber: 'Phone number is too long',
  onEmptyFieldNumber: "I can't create a contact without a number",

  onMinName: 'Name is too short',
  onMaxName: 'Name is too long',
  onEmptyFieldName: "I can't create a contact without a name",
};

export const ContactForm = ({ onSubmit }) => {
  const {
    onTypeErrorNumber,
    onMinNumber,
    onMaxNumber,
    onEmptyFieldNumber,
    onMinName,
    onMaxName,
    onEmptyFieldName,
  } = VALIDATION_MESSAGES;

  const initialValues = { name: '', tel: '' };

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(1, onMinName)
      .max(15, onMaxName)
      .required(onEmptyFieldName),
    tel: yup
      .number()
      .typeError(onTypeErrorNumber)
      .min(MIN_PHONE_LENGTH, onMinNumber)
      .max(MAX_PHONE_LENGTH, onMaxNumber)
      .required(onEmptyFieldNumber),
  });

  const handleSubmit = ({ name, tel }, { resetForm }) => {
    onSubmit({
      name,
      tel,
      id: nanoid(5),
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <h1>Phonebook</h1>
        <label htmlFor="name">
          Name
          <Field type="text" name="name" />
          <ErrorMessage component="div" name="name" />
        </label>
        <label htmlFor="number">
          Number
          <Field type="tel" name="tel" />
          <ErrorMessage component="div" name="tel" />
        </label>
        <button type="submit">Add a contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

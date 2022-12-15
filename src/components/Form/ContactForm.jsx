import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contacts/operations';
import {
  selectAllContacts,
  selectLoading,
} from '../../redux/contacts/selectors';

import { Button, Form, Field, ErrorMessage } from './Form.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const loading = useSelector(selectLoading);

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    number: Yup.string().required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    )
      ? toast.error(` ${values.name} is already in contacts`)
      : dispatch(addContacts({ name, number }));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Field type="text" name="name" />

        <ErrorMessage name="name" component="span" />
        <Field type="tel" name="number" />
        <ErrorMessage name="number" component="span" />
        <Button type="submit">{loading ? 'Add....' : 'Add contacts'}</Button>
        <Toaster position="top-right" reverseOrder={false} />
      </Form>
    </Formik>
  );
};

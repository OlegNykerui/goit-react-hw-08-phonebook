import { Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { useGetContactsQuery, usePostContactsMutation } from 'redux/api';

import { Button, Form, Field, ErrorMessage } from './Form.styled';

export const ContactForm = () => {
  const { data } = useGetContactsQuery();

  const [submitForm, { isLoading }] = usePostContactsMutation();

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    number: Yup.string().required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    const sameName = data.some(
      i => i.name.toLowerCase() === values.name.toLowerCase()
    );
    if (sameName) {
      toast.error(` ${values.name} is already in contacts`);
    }
    resetForm();
    const { name, number } = values;

    submitForm({ name, number });
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
        <Button type="submit">{isLoading ? 'Add....' : 'Add contacts'}</Button>
        <Toaster position="top-right" reverseOrder={false} />
      </Form>
    </Formik>
  );
};

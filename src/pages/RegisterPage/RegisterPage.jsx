import React from 'react';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';
export default function RegisterPage() {
  return (
    <div>
      <h1 className={css.title}>Реєстрація</h1>

      <RegisterForm />
    </div>
  );
}

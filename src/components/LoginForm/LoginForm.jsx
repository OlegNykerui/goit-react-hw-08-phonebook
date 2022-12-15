import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error } = useSelector(state => state.auth);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1 className={css.title}> Вхід</h1>
      {error && <h2>Неправильний пароль чи пошта</h2>}
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Емейл
          <input
            className={css.input}
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
          />
        </label>
        <label className={css.label}>
          Пароль
          <input
            className={css.input}
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
          />
        </label>
        <button className={css.button} type="submit">
          Увійти
        </button>
      </form>
    </>
  );
};

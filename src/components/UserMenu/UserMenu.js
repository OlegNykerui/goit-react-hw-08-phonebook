import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Ласкаво просимо, {user.name}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Вийти
      </button>
    </div>
  );
};

'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import styles from './loginForm.module.css';
import { login } from '@/lib/action';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  // useEffect(() => {
  //   state?.success && router.push('/login');
  // }, [router, state?.success]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        Don&apos;t have an account? <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;

import React from 'react';
import styles from './LoginPage.module.scss';
import Button from '@/components/Button';
import Divider from '@/components/Divider';

function LoginPage() {
  return (
    <div className={styles.login}>
      <section className={styles['login--sidebar']}></section>
      <section className={styles['login--content']}>
        <div className={styles['auth--content']}>
          <h2 className={styles['auth--title']}>Sign up to Youtubeng</h2>
          <Button
            shape='round'
            sx={{
              height: '5.6rem',
              fontSize: '1.4rem',
            }}>
            Sign up with Google
          </Button>
          <Divider content='or'></Divider>
          <Button
            shape='round'
            sx={{
              height: '5.6rem',
              fontSize: '1.4rem',
              backgroundColor: '#fee500',
            }}>
            Sign up with Kakao
          </Button>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;

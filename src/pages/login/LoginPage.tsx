import React from 'react';
import styles from './LoginPage.module.scss';
import IconButton from '@/components/IconButton';
import Button from '@/components/Button';
import Divider from '@/components/Divider';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';

function LoginPage() {
  return (
    <div className={styles.login}>
      <section className={styles['login--sidebar']}>
        <video autoPlay muted loop>
          <source src='https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515'></source>
        </video>
      </section>
      <section className={styles['login--content']}>
        <div className={styles['auth--content']}>
          <h2 className={styles['auth--title']}>Sign up to Youtubeng</h2>
          <IconButton
            icon={FcGoogle}
            iconPosition='left'
            buttonSx={{
              width: '100%',
              height: '5.6rem',
            }}>
            Sign up with Google
          </IconButton>

          <Divider content='or'></Divider>

          <IconButton
            icon={RiKakaoTalkFill}
            iconPosition='left'
            shape='round'
            buttonSx={{
              width: '100%',
              height: '5.6rem',
              backgroundColor: '#fee500',
            }}
            textSx={{ color: '#000' }}>
            Sign up with Kakao
          </IconButton>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;

import React from 'react';
import styles from './TopBar.module.scss';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const navigate = useNavigate();
  const handleSignupBtn = () => {
    navigate('/login');
  };

  return (
    <div className={styles.topbar}>
      <ul className={styles.topbar__menu}>
        <li>검색</li>
        <li>검색</li>
        <li>크리에이터</li>
      </ul>
      <div className={styles.topbar__logo}>로고</div>
      <div className={styles.topbar__user}>
        <Button shape='round' onClick={handleSignupBtn}>
          <p
            style={{
              lineHeight: '4.7rem',
              fontStyle: 'bold',
            }}>
            Sign up
          </p>
        </Button>
      </div>
    </div>
  );
}

export default TopBar;

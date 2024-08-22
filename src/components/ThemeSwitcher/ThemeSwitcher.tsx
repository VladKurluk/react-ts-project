import { useEffect, useState } from 'react';

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);
  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = () => {
    if (!isDark) return <MoonIcon />
    return <SunIcon />;
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
      <span>{themeText}</span>
      <span className={styles.icon}>{ThemeIcon()}</span>
    </div>
  );
};

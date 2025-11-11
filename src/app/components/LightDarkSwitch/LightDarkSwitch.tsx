'use client';

import { Switch } from '@/app/components/ui/switch';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const LightDarkSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  const handleToggle = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
    setIsDarkMode(!isDarkMode);
  };

  if (isDarkMode) {
    return (
      <div className="flex items-center justify-end">
        <img
          src="./assets/images/icon-sun-light.svg"
          className="mr-5"
          alt="sun icon"
        />
        <Switch checked={isDarkMode} onCheckedChange={handleToggle} />
        <img
          className="ml-5"
          src="./assets/images/icon-moon-light.svg"
          alt="moon icon"
        />
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-end">
        <img
          src="./assets/images/icon-sun-dark.svg"
          className="mr-5"
          alt="sun icon"
        />
        <Switch checked={isDarkMode} onCheckedChange={handleToggle} />
        <img
          className="ml-5"
          src="./assets/images/icon-moon-dark.svg"
          alt="moon icon"
        />
      </div>
    );
  }
};

export default LightDarkSwitch;

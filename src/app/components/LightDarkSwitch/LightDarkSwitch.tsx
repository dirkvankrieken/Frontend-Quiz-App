'use client';

import { Switch } from '@/app/components/ui/switch';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const LightDarkSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync the switch state with the current theme
  useEffect(() => {
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  const handleToggle = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center justify-end">
      <img src="./assets/images/icon-sun-dark.svg" alt="sun icon" />
      <Switch checked={isDarkMode} onCheckedChange={handleToggle} />
      <img src="./assets/images/icon-moon-dark.svg" alt="moon icon" />
    </div>
  );
};

export default LightDarkSwitch;

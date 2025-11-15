'use client';

import { Switch } from '@/app/components/ui/switch';
import Image from 'next/image';
import { ThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const LightDarkSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const handleToggle = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="flex items-center justify-end">
      <Image
        src={
          isDarkMode
            ? './assets/images/icon-sun-light.svg'
            : './assets/images/icon-sun-dark.svg'
        }
        width="20"
        height="20"
        className="mr-5"
        alt="sun icon"
      />
      <Switch checked={isDarkMode} onCheckedChange={handleToggle} />
      <Image
        className="ml-5"
        width="20"
        height="20"
        src={
          isDarkMode
            ? './assets/images/icon-moon-light.svg'
            : './assets/images/icon-moon-dark.svg'
        }
        alt="moon icon"
      />
    </div>
  );
};

export default LightDarkSwitch;

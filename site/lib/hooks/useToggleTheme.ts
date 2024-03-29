import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const useToggleTheme = () => {
  const { theme, themes, setTheme } = useTheme();
  const [themeValue, setThemeValue] = useState<string>('light');

  useEffect(() => setThemeValue(theme), [theme]);

  return { theme: themeValue, setTheme, themes };
};

export default useToggleTheme;

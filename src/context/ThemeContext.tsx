// IMPORTS
import {ReactNode, createContext, useContext, useState} from 'react';

type ThemeModeType = 'light' | 'dark';

interface ThemeModeContextProps {
  theme: ThemeModeType;
  setTheme: (value: ThemeModeType) => void;
}

const ThemeMode = createContext<ThemeModeContextProps>({
  theme: 'light',
  setTheme: () => {},
});

interface Props {
  children: ReactNode;
}

function ThemeModeProvider({children}: Props) {
  const [theme, setTheme] = useState<ThemeModeType>('light');

  return (
    <ThemeMode.Provider
      value={{
        theme,
        setTheme,
      }}>
      {children}
    </ThemeMode.Provider>
  );
}

const useThemeMode = () => useContext(ThemeMode);

export {ThemeModeProvider, useThemeMode};

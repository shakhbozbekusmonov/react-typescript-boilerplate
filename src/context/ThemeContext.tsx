import { ReactNode, createContext, useState } from "react";
import { Theme, ThemeContextType } from '../@types/theme';

const ThemeContext = createContext<ThemeContextType | null>(null);

const RootProvider = ({ children }: { children: ReactNode }) => {
    const [themeMode, setThemeMode] = useState<Theme>('light');
    return <ThemeContext.Provider value={{ theme: themeMode, changeTheme: setThemeMode }}>{children}</ThemeContext.Provider>
}

export { ThemeContext, RootProvider };
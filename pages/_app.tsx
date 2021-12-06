import "../styles/globals.css";
import type { AppProps } from "next/app";
import DarkThemeContext from "../components/DarkThemeContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
	const [isDark, setIsDark] = React.useState(false);

	const toggleColorMode = () => {
		setIsDark(!isDark);
	};
	const darkTheme = createTheme({
		palette: {
			mode: isDark ? "dark" : "light",
		},
	});
	const colorModeSettings = {
		darkState: isDark,
		setIsDark,
		toggleColorMode,
	};
	return (
		<DarkThemeContext.Provider value={colorModeSettings}>
			<ThemeProvider theme={darkTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</DarkThemeContext.Provider>
	);
}

export default MyApp;

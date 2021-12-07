import "../styles/globals.css";
import type { AppProps } from "next/app";
import DarkThemeContext from "../components/DarkThemeContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
	const [isDark, setIsDark] = React.useState(false);
	useEffect(() => {
		if (!!window.localStorage) {
			console.log("Doc gave comp flag");
			if (!!window.localStorage.getItem("darkMode")) {
				setIsDark(
					window.localStorage.getItem("darkMode") === "true" ? false : true
				);
			}
		}
	}, []);

	const toggleColorMode = () => {
		setIsDark(!isDark);
		window.localStorage.setItem("darkMode", `${isDark}`);
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

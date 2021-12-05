import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;

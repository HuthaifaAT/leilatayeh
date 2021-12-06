import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/index";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import React from "react";

const Home: NextPage = () => {
	const [height, setheight] = React.useState(0);
	React.useEffect(() => {
		setheight(window.innerHeight - 98);
	}, []);
	return (
		<Layout title="Home">
			<Paper variant="outlined" sx={{ my: 2 }}>
				<Card>
					<CardMedia
						component="img"
						image="/Googleanalytics.jpg"
						height={height}
					/>
				</Card>
			</Paper>
		</Layout>
	);
};

export default Home;

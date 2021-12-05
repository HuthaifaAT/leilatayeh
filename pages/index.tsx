import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/index";

const Home: NextPage = () => {
	return <Layout title="Home">Welcome Home</Layout>;
};

export default Home;

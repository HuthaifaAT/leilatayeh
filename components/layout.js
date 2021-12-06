import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Menu from "@mui/material/Menu";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Head from "next/head";
import Router from "next/router";
import Link from "next/link";
import Switch from "@mui/material/Switch";
import DarkThemeContext from "./DarkThemeContext";

export default function Layout({ children, title }, props) {
	const colorMode = React.useContext(DarkThemeContext);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleRegClick = (event) => {
		switch (event.target.innerText.toLowerCase()) {
			case "register":
				console.log("Register Clicked!");
				Router.push("/register");
				break;
			case "login":
				console.log("Login Clicked!");
				Router.push("/login");
				break;

			default:
				break;
		}
	};
	return (
		<Paper
			variant="outlined"
			sx={{ width: "100%", minHeight: "100vh", borderRadius: 0 }}>
			<Container maxWidth="lg" sx={{ height: "100%" }}>
				<Head>
					<title>{title}</title>
				</Head>

				<AppBar position="static" color="transparent">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ marginInlineEnd: 0.5 }}
							onClick={handleClick}>
							<MenuIcon />
						</IconButton>
						<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
							<MenuItem onClick={handleClose}>Item1</MenuItem>
							<MenuItem onClick={handleClose}>Item2</MenuItem>
							<MenuItem onClick={handleClose}>Item3</MenuItem>
						</Menu>
						<HomeIcon
							onClick={() => {
								Router.push("/");
							}}
							sx={{ marginInlineEnd: 2 }}
						/>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							{title}
						</Typography>
						<Breadcrumbs
							seperator="/"
							maxItems={2}
							sx={{ paddingInlineEnd: "0px !important" }}>
							<Button
								size="small"
								variant="text"
								color="inherit"
								onClick={handleRegClick}>
								<Link href="/login">Login</Link>
							</Button>
							<Button
								size="small"
								variant="text"
								color="inherit"
								onClick={handleRegClick}>
								<Link href="/login">Register</Link>
							</Button>
						</Breadcrumbs>
						<Switch
							checked={colorMode.darkState}
							onChange={colorMode.toggleColorMode}
						/>
					</Toolbar>
				</AppBar>
				<Box sx={{ width: "100%" }}>{children}</Box>
				<Paper>
					<Typography variant="h1">Test</Typography>
				</Paper>
			</Container>
		</Paper>
	);
}

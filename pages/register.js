import React from "react";
import { Layout } from "../components/index";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Input from "@mui/material/Input";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
	":root": {
		borderColor: "transparent",
	},
	"& label.Mui-focused": {
		color: "transparent",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "transparent",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "transparent",
		},
		"&:hover fieldset": {
			borderColor: "transparent",
		},
		"&.Mui-focused fieldset": {
			borderColor: "transparent",
		},
		"&.Mui-disabled fieldset": {
			borderColor: "transparent",
		},
	},
});

export default function Register() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target[2].value);
	};
	return (
		<Layout title="Register">
			<Container maxWidth="sm">
				<Box component="form" onSubmit={handleSubmit}>
					<Box sx={{ width: "100%" }}>
						<CssTextField
							disabled
							margin="normal"
							size="medium"
							sx={{ width: "92.5%", mx: "0", borderColor: "transparent" }}
							InputProps={{
								startAdornment: (
									<Chip
										component="label"
										size="string"
										for="image_uploads"
										label="Upload Avatar"
										sx={{
											width: "110px",
											height: "110px",
											py: 2.5,
											borderRadius: "50%",
										}}
									/>
								),
							}}
						/>
						<Input
							type="file"
							name="avatar"
							id="image_uploads"
							inputProps={{ accept: "image/*" }}
							sx={{ width: "92.5%", mx: "1.25%", display: "none" }}
						/>
					</Box>

					<Box sx={{ width: "100%" }}>
						<TextField
							required
							margin="normal"
							size="medium"
							variant="outlined"
							label="First Name"
							sx={{ width: "45%", mx: "1.25%" }}
						/>
						<TextField
							required
							margin="normal"
							size="medium"
							variant="outlined"
							label="Last Name"
							sx={{ width: "45%", mx: "1.25%" }}
						/>
					</Box>
					<Box sx={{ width: "100%" }}>
						<TextField
							required
							margin="normal"
							size="medium"
							variant="outlined"
							label="Username"
							sx={{ width: "92.5%", mx: "1.25%" }}
						/>
					</Box>
					<Box sx={{ width: "100%" }}>
						<TextField
							required
							margin="normal"
							size="medium"
							variant="outlined"
							label="Email"
							sx={{ width: "92.5%", mx: "1.25%" }}
						/>
					</Box>
					<Box sx={{ width: "100%" }}>
						<TextField
							required
							margin="normal"
							size="medium"
							variant="outlined"
							label="Password"
							sx={{ width: "92.5%", mx: "1.25%" }}
						/>
					</Box>
					<Box sx={{ width: "100%" }}>
						<TextField
							required
							margin="normal"
							size="medium"
							variant="outlined"
							label="Re-Enter Password"
							sx={{ width: "92.5%", mx: "1.25%" }}
						/>
					</Box>
					<Button
						variant="outlined"
						color="secondary"
						fullWidth
						type="submit"
						sx={{ width: "92.5%", mx: "1.25%" }}>
						Register
					</Button>
				</Box>
			</Container>
		</Layout>
	);
}

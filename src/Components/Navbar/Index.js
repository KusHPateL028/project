import React from "react";
import { Stack, AppBar, Box, Toolbar, Typography, Container, Avatar, Button, Link } from "@mui/material";
import { Home as HomeIcon, Menu as MenuIcon, MedicalServices as MedicalServicesIcon, Info as InfoIcon, PersonOutline as PersonOutlineIcon, Logout, GridView } from '@mui/icons-material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor, faFlaskVial } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Images/logos/logo.png";
import Drawer from '../Drawer/Index'

const profile = [
	{
		name: "Profile",
		icon: <PersonOutlineIcon />
	},
	{
		name: "Dashboard",
		icon: <GridView />
	},
	{
		name: "Logout",
		icon: <Logout />
	},
]
const menu = [
	{
		name: "Home",
		icon: <HomeIcon />,
		url: '/home'
	},
	{
		name: "Services",
		icon: <MedicalServicesIcon size="lg" />,
		url: '/services'
	},
	{
		name: "Doctors",
		icon: <FontAwesomeIcon icon={faUserDoctor} size="lg" style={{ marginLeft: 3 }} />,
		url: '/doctors'
	},
	{
		name: "Lab Test",
		icon: <FontAwesomeIcon icon={faFlaskVial} size="lg" style={{ marginLeft: 3 }} />,
		url: '/labtest'
	},
	{
		name: "About Us",
		icon: <InfoIcon />,
		url: '/about'
	},
]

export default function Index(props) {
	return (
		<AppBar position="static" style={{ backgroundColor: "transparent" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Stack
						component={"img"}
						src={logo}
						width="40px"
						sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
					/>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							color: "#409bd8",
							textDecoration: "none",
						}}
					>
						HEALTH
					</Typography>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							color: "#65138f",
							textDecoration: "none",
						}}
					>
						CARE
					</Typography>
					<Drawer
						array={menu}
						BoxSX={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
						button="MenuButton"
						anchor="left"
						display={` xs: "block", md: "none" `}
					>
						<MenuIcon style={{ color: "black" }} />
					</Drawer>
					<Stack
						component={"img"}
						src={logo}
						width="40px"
						sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
					/>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							display: { xs: "flex", md: "none" },
							fontFamily: "monospace",
							fontWeight: 700,
							color: "#409bd8",
							textDecoration: "none",
						}}
					>
						HEALTH
					</Typography>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							color: "#65138f",
							textDecoration: "none",
						}}
					>
						CARE
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} justifyContent={"center"} mr={10}>
						{menu.map(({ name, url }) => (
							<Link
								to={url}
								sx={{
									textDecoration: "none",
									
								}}
							>
								<Typography
									key={name}
									variant="body1"
									mx={1}
									color="black"
									sx={{
										cursor: "pointer",
										'&:hover': {
											color: 'red',
										  },
									}}
								>
									{name}
								</Typography>
							</Link>
							// <Button
							// 	key={name}
							// 	sx={{ my: 2, color: "black", display: "block" }}
							// >
							// 	{name}
							// </Button>
						))}
					</Box>
					<Drawer
						array={profile}
						BoxSX={{ flexGrow: 0 }}
						button="ProfileButton"
						anchor="right"
						display="block"
					>
						<Avatar>{"Kush".slice(0, 1)}</Avatar>
					</Drawer>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
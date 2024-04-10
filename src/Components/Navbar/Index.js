import React, { useState } from "react";
import { Stack, AppBar, Box, Toolbar, Typography, Container, Link } from "@mui/material";
import { Home as HomeIcon, Menu as MenuIcon, MedicalServices as MedicalServicesIcon, Info as InfoIcon, PersonOutline as PersonOutlineIcon, Logout, GridView } from '@mui/icons-material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor, faFlaskVial } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Images/logos/logo.png";
import Drawer from '../Drawer/Index'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar/Index'
import Button from '../Button/Index'

export default function Index(props) {
	const navigate = useNavigate();
	const { isLoggedIn } = useAuth();

	const LoginData = props.data
	console.log("Kush")
	console.log(LoginData)
	console.log("Username")
	console.log(LoginData.userName)

	const userName = (LoginData.userName) || (LoginData.name)
	let img =  LoginData.picture?.data?.url || LoginData.picture || ''
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
			name: 'Logout',
			icon: <Logout />,
			url: "/login"
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
			icon: <InfoIcon style={{ marginLeft: 4 }} />,
			url: '/about'
		},
	]

	const [activeMenu, setActiveMenu] = useState(null);
	const handleMenuClick = (menu) => {
		setActiveMenu(menu);
	};
	return (
		<AppBar position="static" style={{ backgroundColor: "transparent" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Link href='/' style={{ cursor: "pointer", textDecoration: "none" }}>
						<Stack direction={"row"}>
							<Stack
								component={"img"}
								src={logo}
								width="40px"
								sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
							/>
							<Typography
								variant="h6"
								noWrap
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
						</Stack>
					</Link>
					<Drawer
						array={menu}
						arrayName="menu"
						BoxSX={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
						button="MenuButton"
						anchor="left"
						display={` xs: "block", md: "none" `}
						tip="Open Menubar"
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
									mx={2}
									fontWeight={"bold"}
									color={activeMenu === name ? '#409bd8' : '#65138f'}
									onClick={() => handleMenuClick(name)}
									sx={{
										textShadow: activeMenu === name ? "4px 4px 10px rgba(0,0,0,0.5)" : "",
										opacity: activeMenu === null ? 1 : activeMenu === name ? 1 : 0.5,
										cursor: "pointer",
										'&:hover': {
											color: '#409bd8',
											textShadow: "4px 4px 10px rgba(0,0,0,0.5)"
										},
									}}
								>
									{name}
								</Typography>
							</Link>
						))}
					</Box>
					{
						isLoggedIn ?
							<Drawer
								array={profile}
								arrayName="profile"
								BoxSX={{ flexGrow: 0 }}
								button="ProfileButton"
								anchor="right"
								display="block"
								tip="Open Profile"
								userName={userName}
								img={img}
							>
								{img? <Avatar src={img} /> : <Avatar name={userName} />}
							</Drawer>
							: 
							<Button
								variant="contained"
								onClick={() => {
									navigate('/login')
								}} 
								text="Log In"
								style={{
									backgroundColor:"red",
									'&:hover':{
										backgroundColor:"transparent"
									}
								}}
							/>

					}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
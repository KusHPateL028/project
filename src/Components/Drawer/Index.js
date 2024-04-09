import React, { useEffect, useState } from "react";
import {
	Drawer,
	Toolbar,
	Divider,
	List,
	ListItem,
	Stack,
	ListItemButton,
	ListItemIcon,
	Box,
	Tooltip,
	IconButton,
	Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Avatar from '../Avatar/Index'

const drawerWidth = 240;

export default function Index(props) {
	const navigate = useNavigate();
	const [activeMenu, setActiveMenu] = useState(null);
	const [url, setURL] = useState(null)
	const { isLoggedIn, login, logout } = useAuth();
	const handleMenuClick = (menu, url) => {
		setActiveMenu(menu);
		setURL(url)
	};
	const { windowScreen } = props;

	const [selectedButton, setSelectedButton] = useState(null);

	const handleButtonClick = (button) => {
		setSelectedButton(button);
	};

	const [mobileOpen, setMobileOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const handleDrawerClose = () => {
		setIsClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setIsClosing(false);
	};

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setMobileOpen(!mobileOpen);
		}
	};
	const random = () => {
		if (activeMenu === "Logout") {
			let Logout = window.confirm("Are you sure you want to Logout")
			if (Logout) {
				logout();
			} else {
				setActiveMenu(null)
				setURL(null)
			}
		} else {
			navigate(url);
		}
	}
	useEffect(() => {
		random();
	})

	const drawer = (
		<div>
			<Toolbar />
			{
				props.arrayName === "profile" ?
					<Stack direction="row" marginTop={"-60px"} py={3} alignItems={"center"} justifyContent={"center"} spacing={2}>
						<Avatar name={props.userName} />
						<Typography variant="h4" style={{ color: "#409bd8" }}>{props.userName.split(' ')[0]}</Typography>
					</Stack> : ""
			}
			<Divider />
			<List>
				{props.array?.map(({ name, icon, url }) => (
					<ListItem key={name} disablePadding>
						<ListItemButton
							sx={{
								textShadow:
									activeMenu === name ? "4px 4px 10px rgba(0,0,0,0.5)" : "",
								opacity:
									activeMenu === null ? 1 : activeMenu === name ? 1 : 0.5,
								cursor: "pointer",
								"&:hover": {
									textShadow: "4px 4px 10px rgba(0,0,0,0.5)",
									"& .MuiTypography-root": {
										color: "#409bd8",
									},
								},
							}}
							onClick={() => {
								handleMenuClick(name, url);
							}}
						>
							<ListItemIcon>{icon}</ListItemIcon>
							<Typography
								key={name}
								variant="body1"
								my={1}
								fontWeight={"bold"}
								color={activeMenu === name ? "#409bd8" : "#65138f"}
							>
								{name}
							</Typography>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
		</div>
	);

	const container =
		windowScreen !== undefined ? () => windowScreen().document.body : undefined;

	return (
		<Box sx={props.BoxSX}>
			<Tooltip title={props.tip}>
				<IconButton
					onClick={(e) => {
						e.preventDefault();
						handleButtonClick(props.button);
						handleDrawerToggle();
					}}
					color="inherit"
				>
					{props.children}
				</IconButton>
			</Tooltip>
			<Box
				component="nav"
				sx={{ flexShrink: { md: 0 } }}
				aria-label="mailbox folders"
			>
				<Drawer
					container={container}
					variant="temporary"
					open={selectedButton === props.button && mobileOpen}
					anchor={props.anchor}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: props.display,
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}

Index.propTypes = {
	windowScreen: PropTypes.func,
};

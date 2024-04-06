import React, { useState } from "react";
import {
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Tooltip,
  IconButton,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const drawerWidth = 240;

export default function Index(props) {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const { isLoggedIn, login, logout } = useAuth();
  console.log(activeMenu);
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  const { window } = props;

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };
  console.log(selectedButton);

  const [mobileOpen, setMobileOpen] = useState(false); /* */
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

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {props.array?.map(({ name, icon, url }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <Typography
                key={name}
                variant="body1"
                my={1}
                fontWeight={"bold"}
                color={activeMenu === name ? "#409bd8" : "#65138f"}
                onClick={() => {
                  handleMenuClick(name);
                  if (activeMenu[0] === "Logout") {
                    const Logout = window.confirm(
                      "Are you sure you want to Logout?"
                    );
                    if (Logout) {
                      navigate(url);
                    }
                  } else {
                    navigate(url);
                  }
                }}
                sx={{
                  textShadow:
                    activeMenu === name ? "4px 4px 10px rgba(0,0,0,0.5)" : "",
                  opacity:
                    activeMenu === null ? 1 : activeMenu === name ? 1 : 0.5,
                  cursor: "pointer",
                  "&:hover": {
                    color: "#409bd8",
                    textShadow: "4px 4px 10px rgba(0,0,0,0.5)",
                  },
                }}
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
    window !== undefined ? () => window().document.body : undefined;

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
  window: PropTypes.func,
};

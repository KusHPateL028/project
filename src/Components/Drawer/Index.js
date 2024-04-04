import React , {useState} from 'react'
import { Drawer ,Toolbar , Divider , List , ListItem , ListItemButton , ListItemIcon , ListItemText , Box , Tooltip , IconButton } from '@mui/material';
import PropTypes from "prop-types";

const drawerWidth = 240;

export default function Index(props) {
  const { window } = props;

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const [mobileOpen, setMobileOpen] = useState(false);/* */
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
        {props.array?.map(({ name, icon }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={name} />
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
      <Tooltip title="Open Menubar">
        <IconButton
          onClick={(e) => {
            e.preventDefault()
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
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

Index.propTypes = {
  window: PropTypes.func,
};
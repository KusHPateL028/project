import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Stack, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import logo from '../../Assets/Images/logos/logo.png'
import PropTypes from 'prop-types';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const pages = ['Products', 'Pricing', 'Blog'];
const menu =[
    {
        name:"Home",
        icon:<MailIcon/>
    },
    {
        name:"Services",
        icon:<MenuIcon/>
    },
    {
        name:"Doctors",
        icon:<InboxIcon/>
    },
    {
        name:"Lab Test",
        icon:<InboxIcon/>
    },
    {
        name:"About Us",
        icon:<MailIcon/>
    },
]
const drawerWidth = 240;

function Index(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

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

    const menuDrawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {menu.map(({name , icon}) => (
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
    const profileDrawer = (
        <div>
            <Toolbar />
            <Divider /> 
            <List>
                {settings.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider /> 
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Stack component={"img"} src={logo} width={"40px"} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: '#409bd8',
                            textDecoration: 'none',
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
                            mr:2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: '#65138f',
                            textDecoration: 'none',
                        }}
                    >
                        CARE
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerToggle}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box
                            component="nav"
                            sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                            aria-label="mailbox folders"
                        >
                            <Drawer
                                container={container}
                                variant="temporary"
                                open={mobileOpen}
                                onTransitionEnd={handleDrawerTransitionEnd}
                                onClose={handleDrawerClose}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                }}
                            >
                                {menuDrawer}
                            </Drawer>

                        </Box>
                    </Box>
                    <Stack component={"img"} src={logo} width="40px" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: '#409bd8',
                            textDecoration: 'none',
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
                            mr:2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: '#65138f',
                            textDecoration: 'none',
                        }}
                    >
                        CARE
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleDrawerClose}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Box
                            component="nav"
                            sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                            aria-label="mailbox folders"
                        >
                            <Drawer
                                container={container}
                                variant="temporary"
                                open={mobileOpen}
                                onTransitionEnd={handleDrawerTransitionEnd}
                                onClose={handleDrawerClose}
                                ModalProps={{
                                    keepMounted: true,
                                }}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                }}
                            >
                                {profileDrawer}
                            </Drawer>

                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

Index.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};
export default Index;

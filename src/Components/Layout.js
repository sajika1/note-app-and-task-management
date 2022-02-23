import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {format} from 'date-fns';

import { AppBar, Avatar, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Box, spacing } from '@mui/system';
import { useTheme } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListIcon from '@mui/icons-material/List';

const drawerWidth = 240;

//? sidebar items 
const drawerItems = [
    { 
        index:2 ,
        icon:<ListIcon color='secondary'/> ,
        text:"My Notes",
        src:'/notes'
    },
    { 
        index:1 ,
        icon:<AddCircleOutlineIcon color='secondary'/> ,
        text:"Create Notes",
        src:'/'
    }
]

function Layout({children}) {
    
    const navigate = useNavigate();
    
    const [selectedIndex, setSelectedIndex] = React.useState(2);
    
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    let {pathname} = useLocation();
    
    useEffect( ()=> {
        const {index} = drawerItems.find(item => item.src === pathname.toString())
        setSelectedIndex(index);
    } ,[pathname])

    const handleListItemClick = (event, item) => {
        setSelectedIndex(item.index);
        navigate(item.src);
        setMobileOpen(!mobileOpen);
    };

      
    const drawer = (
        <div>
            <Typography variant='h6' component="h1" sx={{
                padding:' 15px 10px',
                marginBottom:"5px",
            }}
                color="text.secondary"
            >
                My Notes
            </Typography>
            <List component="nav" aria-label="main mailbox folders">
               {
                   drawerItems.map(item => (
                        <ListItemButton
                        selected={selectedIndex === item.index}
                        onClick={(event) => handleListItemClick(event, item)}
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    ))
               }
         
            </List>
        </div>
    )

    //? CUSTOM STYLES 
    const flex = { 
          display:'flex'
      }

    return (
        <div style={flex}>
            <AppBar
                position="fixed"
                sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px `},
                }}
                elevation
                color='inherit'
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography 
                        variant="body2"
                        flexGrow={1}
                        noWrap 
                        component="div"
                    >
                        {format(new Date() , "do MMMM Y")}
                    </Typography>
                    <Typography variant='h6'>
                        Sajika
                    </Typography>
                    <Avatar sx={{marginLeft:"10px"}}/>
                </Toolbar>
            </AppBar>
            
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                {drawer}
                </Drawer>
                
                <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                {drawer}
                </Drawer>
            </Box>
            {children}
        </div>
    )
}

export default Layout

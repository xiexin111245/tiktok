import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import Link from 'next/link';

import NavLogoIcon from '../icons/navlogo.svg';
import NavTitle from '../icons/navtitle.svg';
import MenuFoldOutlined from '../icons/MenuFoldOutlined.svg';
import HomeIcon from '../icons/home.svg';
import MarketIcon from '../icons/market.svg';
import TopRankingIcon from '../icons/toprank.svg';
import MyTrackingIcon from '../icons/mytracking.svg';
import ComparationIcon from '../icons/comparation.svg';
import UsersAndAccountsIcon from '../icons/usersandaccounts.svg';
import LabelManagementIcon from '../icons/labelmanagement.svg';
import SettingsIcon from '../icons/settings.svg';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LoginInfo from './loginInfo';

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

const closedMixin = (theme: Theme): CSSObject => ({
transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
}),
overflowX: 'hidden',
width: `calc(${theme.spacing(7)} + 1px)`,
[theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
},
});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));


  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // width: `calc(100% - ${drawerWidth}px + calc(${theme.spacing(7)} + 1px))`,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...(open && {
      marginLeft: drawerWidth,
    //   width: `calc(100% - ${drawerWidth}px)`,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

export default function MainNav({ children }: { children: React.ReactNode }) {

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [subOpen, setSubOpen] = React.useState(false);
    const [sub2Open, setSub2Open] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setSubOpen(false);
        setSub2Open(false);
        
    };

    const handleSubMenuClick = () => {
        if(open) {
            setSubOpen(!subOpen);
        }
       
    };
    const handleSub2MenuClick = () => {
        if(open){
            setSub2Open(!sub2Open);
        }
    };

    return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{boxShadow:1}}>
        <Toolbar sx={{ display:'flex', justifyConnect:'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuFoldOutlined />
          </IconButton>
        </Toolbar>
        <LoginInfo />
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
            <NavLogoIcon/>
            <NavTitle/>
          <IconButton onClick={handleDrawerClose}>
            <MenuFoldOutlined/>
            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
          </IconButton>
        </DrawerHeader>
        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))} */}

            <ListItem disablePadding sx={{ display: 'block' }}>
              <Link href='/accounts'>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"L'Oréal  Accounts"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Link>
            </ListItem>
                
            <ListItem disablePadding sx={{ display: 'block' }}>
              <Link href='/market'>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  <MarketIcon />
                </ListItemIcon>
                <ListItemText primary={"Market Position"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={handleSubMenuClick}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  <TopRankingIcon />
                </ListItemIcon>
                <ListItemText primary={"Top Ranking"} sx={{ opacity: open ? 1 : 0 }} />
                {open ?  subOpen ? <ExpandLess /> : <ExpandMore /> : null}
              </ListItemButton>
            </ListItem>
            <Collapse in={subOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {
                    ['Hot Video Ranking','Trending Topics','Affiliate Ranking','Tiktok Audience Tracker', 'Hot Live streaming','Streamer Ranking'].map(
                        (text,index) => (
                            <ListItem
                            key={index}
                            button
                            sx={{ paddingLeft: theme.spacing(4)}}
                        >
                            <ListItemIcon>
                            <FiberManualRecordIcon fontSize='small' />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem> 
                        )
                    )
                }
                </List>
            </Collapse>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={handleSub2MenuClick}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  <MyTrackingIcon />
                </ListItemIcon>
                <ListItemText primary={"My Tracking"} sx={{ opacity: open ? 1 : 0 }} />
                {open ?  sub2Open ? <ExpandLess /> : <ExpandMore /> : null}
              </ListItemButton>
            </ListItem>
            <Collapse in={sub2Open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {
                    ['Affiliates pool','Cooperated affiliates','Competitors','Tracking Content'].map(
                        (text,index) => (
                            <ListItem
                            key={index}
                            button
                            sx={{ paddingLeft: theme.spacing(4)}}
                        >
                            <ListItemIcon>
                            <FiberManualRecordIcon fontSize='small' />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem> 
                        )
                    )
                }
                </List>
            </Collapse>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  <ComparationIcon />
                </ListItemIcon>
                <ListItemText primary={"Comparation"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    <UsersAndAccountsIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Users and Accounts"} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    <LabelManagementIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Label Management"} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Settings"} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
      
    )
}
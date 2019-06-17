import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
import PhotoIcon from '@material-ui/icons/Photo';
import LocationIcon from '@material-ui/icons/Explore';

import { Link as RouterLink } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  Pastor: {
    width: '100%',
    height: 'auto',
  },  
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const menuIcons = [
  {
    index : '1',
    text : 'Home'
  },
  {
    index : '2',
    text : 'About'
  },
  {
    index : '3',
    text : 'Photo'
  },
  {
    index : '4',
    text : 'Information'
  },
  {
    index : '5',
    text : 'Vision Trip'
  }
]


class AppShell extends React.component {
  constructor(props) {
    super(props);
  }    

  render(){

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
      setOpen(true);
    }

    function handleDrawerClose() {
      setOpen(false);
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Monterey Hope Church 몬트레이 소망 교회
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
          <Link component={RouterLink} to="/">
            <ListItem button>
              <ListItemIcon> 
              <HomeIcon />             
              </ListItemIcon>
            <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link component={RouterLink} to="/Gallary">
          <ListItem button>
            <ListItemIcon>
              <PhotoIcon />
            </ListItemIcon>
            <ListItemText primary="Photo" />
          </ListItem>
          </Link>
          <Link component={RouterLink} to="/Calendar">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Calender" />
          </ListItem>
          </Link>
          <Link component={RouterLink} to="/Information">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Infomation" />
          </ListItem>
          </Link>
          <Link component={RouterLink} to="/Church">
          <ListItem button>
            <ListItemIcon>
              <LocationIcon />
            </ListItemIcon>
            <ListItemText primary="Location" />
          </ListItem>
          </Link>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
        <div className={classes.toolbar} />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                
                <div id="content" style={{margin: 'auto', marginTop: '20px'}}>
                  {React.cloneElement(this.props.children)}
                </div>

              </Paper>
            </Grid>
          </Grid>
      </main>
      </div>
    );
    }
}

export default AppShell;
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;
const styles = {
  root: {
    flexGrow: 1,
    display:'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  menuButton: {
    marginRight: 'auto'
  },
};

class AppShell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }
  handleDrawerToggle = () => this.setState({ toggle: !this.state.toggle })
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
              <MenuIcon />
              <Typography variant="h6" noWrap >
              Monterey Bay Hope Church 몬트레이 소망교회
            </Typography>
            </IconButton>
          </AppBar>
          <Drawer open={this.state.toggle}>
            <MenuItem onClick={this.handleDrawerToggle}>
              <Link component={RouterLink} to="/">
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={this.handleDrawerToggle}>
              <Link component={RouterLink} to="/texts">
                Texts
              </Link>
            </MenuItem>
            <MenuItem onClick={this.handleDrawerToggle}>
              <Link component={RouterLink} to="/words">
                Words
              </Link>
            </MenuItem>
            <MenuItem onClick={this.handleDrawerToggle}>
              <Link component={RouterLink} to="/about">
                About Church
              </Link>
            </MenuItem>
          </Drawer>
        </div>
        <div id="content" style={{ margin: 'auto', marginTop: '20px' }}>
          {React.cloneElement(this.props.children)}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AppShell);


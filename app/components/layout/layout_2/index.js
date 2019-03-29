import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Navigator from './navigator';
import Header from './header';
import Snackbars from '../../common/Snackbars';
import {connect} from 'react-redux';
import {compose} from 'redux';
let theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    palette: {
        primary: {
            light: '#63ccff',
            main: '#f58220',
            dark: '#18202c',
            contrastText: '#fff',
        },
    
    },
    shape: {
        borderRadius: 8,
    },
});

theme = {
    ...theme,
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#18202c',
            },
        },
        MuiButton: {
            label: {
                textTransform: 'initial',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing.unit,
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'initial',
                margin: '0 16px',
                minWidth: 0,
                [theme.breakpoints.up('md')]: {
                    minWidth: 0,
                },
            },
            labelContainer: {
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing.unit,
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        ...theme.mixins,
        toolbar: {
            minHeight: 48,
        },
    },
};

const drawerWidth = 256;

const styles = {
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    mainContent: {
        flex: 1,
        padding: '48px 36px 0',
        background: '#eaeff1',
    },
};

class Paperbase extends React.Component {
 
    state = {
        mobileOpen: false,
    };
    
 
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };


    render() {
        const { classes, url, notifications, auths } = this.props;
    
        return (
            <div>
                
         
            <MuiThemeProvider theme={theme}>
         
                <div className={classes.root}>
                    <CssBaseline />
                    <nav className={classes.drawer}>
                        <Hidden smUp implementation="js">
                            <Navigator
                                PaperProps={{ style: { width: drawerWidth } }}
                                variant="temporary"
                                open={this.state.mobileOpen}
                                onClose={this.handleDrawerToggle}
                                
                            />
                        </Hidden>
                        <Hidden xsDown implementation="css">
                                <Navigator PaperProps={{ style: { width: drawerWidth } }} auths={auths}  url={url} />
                        </Hidden>
                    </nav>
                    <div className={classes.appContent}>
                            <Header onDrawerToggle={this.handleDrawerToggle}/>
                        <main className={classes.mainContent}>
                            {this.props.children}
                                <Snackbars notification={notifications} />
                        </main>
                    </div>
                </div>
            </MuiThemeProvider>
            </div>
        );
    }
}

Paperbase.propTypes = {
    classes: PropTypes.object.isRequired,
    notifications:PropTypes.object.isRequired,
    auths:PropTypes.object.isRequired
};

const mapStateToProps = (state)=>({
    notifications:state.notifications,
    auths:state.auths
})

export default compose(connect(mapStateToProps),withStyles(styles))(Paperbase);
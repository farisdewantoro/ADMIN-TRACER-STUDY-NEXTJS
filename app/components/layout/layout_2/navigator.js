import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import EventNoteIcon from '@material-ui/icons/EventNote'
import Link from 'next/link';


const styles = theme => ({
    categoryHeader: {
        paddingTop: 16,
        paddingBottom: 16,
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 4,
        paddingBottom: 4,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: 16,
        paddingBottom: 16,
    },
    firebase: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.common.white,
    },
    itemActionable: {
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    itemActiveItem: {
        color: '#f58220',
    },
    itemPrimary: {
        color: 'inherit',
        fontSize: theme.typography.fontSize,
        '&$textDense': {
            fontSize: theme.typography.fontSize,
        },
    },
    textDense: {},
    divider: {
        marginTop: theme.spacing.unit * 2,
    },
});

function Navigator(props) {
    
    const { classes, url, ...other } = props;

    const listMenu = [
        { id: 'Identitas', icon: <PeopleIcon />, link:'/identitas',},
        { id: 'Data Alumni', icon: <DnsRoundedIcon />,link:'/data-alumni' },
        {id:'Data Quisoner', icon:<EventNoteIcon/>,link:'/data-quisoner'}
        // { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
        // { id: 'Hosting', icon: <PublicIcon /> },
        // { id: 'Functions', icon: <SettingsEthernetIcon /> },
        // { id: 'ML Kit', icon: <SettingsInputComponentIcon /> },
        // { id: 'Logout', icon: <ExitToAppIcon /> }
    ];
    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
                    <img src='/static/cdc.png' style={{ maxWidth: '100%', maxHeight: '60px' }} alt="LOGO CDC" />
        </ListItem>
            
             
                    <React.Fragment >
                    <ListItem className={classes.categoryHeader}  >
                            <ListItemText
                                classes={{
                                    primary: classes.categoryHeaderPrimary,
                                }}
                            >
                               {/* Tracer Study Itenas */}
                            </ListItemText>
                        </ListItem>
                        {listMenu.map(({ id: childId, icon,link }) => (
                            <Link href={link} key={childId}>
                                <ListItem
                                    button
                                    dense
                                    key={childId}
                                    className={classNames(
                                        classes.item,
                                        classes.itemActionable,
                                        url === link && classes.itemActiveItem,
                                    )}

                                >
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.itemPrimary,
                                            textDense: classes.textDense,
                                        }}
                                    >
                                        {childId}
                                    </ListItemText>
                                </ListItem>
                            </Link>
                    
                        ))}
                        <Divider className={classes.divider} />
                    </React.Fragment>
             
            </List>
        </Drawer>
    );
}

Navigator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
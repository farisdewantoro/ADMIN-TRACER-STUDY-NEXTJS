import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Layout2 from '../../components/layout/layout_2';
import {
    Grid,
    Card,
    CardContent,
    Button,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    ExpansionPanel,
    Typography,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link';
import { getAllAdmin} from '../../actions/AdminActions';
import {connect} from 'react-redux';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import moment from 'moment';
class DataAdminJurusan extends Component {
    static async getInitialProps(something) {
        const { res, req } = something;
        if (!req.user) {
            res.writeHead(302, {
                Location: '/login'
            })
            res.end()
        }

    }
    componentDidMount(){
        this.props.getAllAdmin();
    }

    render() {
        const { classes, admins} = this.props;
        return (
            <Layout2 url={'/data-admin-jurusan'}>
                <div>
                    <Grid container direction="column" spacing={16}>
                        <Grid item xs={12}>
                            <a href="/data-admin-jurusan/create">
                                <Button variant="contained" color="primary">
                                    TAMBAH DATA
              </Button>
                            </a>

                        </Grid>
                        <Grid item xs={12}>
                        {admins.admin.map(a=>{
                            return(
                                <ExpansionPanel key={a.jurusan}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>{a.jurusan}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                      <List style={{width:'100%'}}>
                                            {a.admin.map((ad,i) => {
                                                console.log(ad.username);
                                                return (
                                                    <ListItem button style={{borderRadius:15}}>
                                                        <Typography style={
                                                            {
                                                                margin: "0px 5px",
                                                                fontWeight: "bold"
                                                            }
                                                        }>
                                                            {i+1}.
                                                      </Typography>
                                                      <Typography style={
                                                          {
                                                              margin:"0px 10px",
                                                              fontWeight:"bold"
                                                          }
                                                      }>
                                                          Username :
                                                      </Typography>
                                                      <Typography>
                                                          {ad.username}
                                                      </Typography>
                                                        <Typography style={
                                                            {
                                                                margin: "0px 10px",
                                                                fontWeight: "bold"
                                                            }
                                                        }>
                                                            Created At :
                                                      </Typography>
                                                      <Typography>
                                                            {moment(ad.created_at).format('LL')}
                                                      </Typography>
                                                        <ListItemSecondaryAction>
                                                            <IconButton>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </ListItemSecondaryAction>
                                                    </ListItem>
                                                )
                                            })}
                                      </List>
                                      
                                       
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            )
                        })}
               
                       
                        </Grid>
                    </Grid>
                </div>
            </Layout2>

        )
    }
}

DataAdminJurusan.propTypes={
    classes:PropTypes.object.isRequired,
    getAllAdmin:PropTypes.func.isRequired,
    admins:PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
    admins:state.admins
})

export default compose(withStyles(styles), connect(mapStateToProps,{getAllAdmin}))(DataAdminJurusan);

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
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Divider
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { getAllQuisoner } from '../../actions/quisonerActions';
class DataQuisoner extends Component {
    static async getInitialProps(something) {
        const { res, req } = something;
        if (!req.user) {
            res.writeHead(302, {
                Location: '/login'
            })
            res.end()
        }

    }


    componentDidMount() {
        this.props.getAllQuisoner();
    }

    render() {
        const { classes, quisoners } = this.props;
        return (
            <Layout2 url={'/data-quisoner'}>
                <div>
                    <Grid container direction="column" spacing={16}>
                        <Grid item xs={12}>
                            <Link href="/data-quisoner/create">
                                <Button variant="contained" color="primary">
                                    TAMBAH DATA
              </Button>
                            </Link>

                        </Grid>
                        <Grid item xs={12}>
                            {quisoners.quisoner.map((q, i) => {
                                return (
                                    <ExpansionPanel key={q.id}>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <div className={classes.box}>
                                                <Typography className={classes.ListParent}>
                                                    Judul :
                                         </Typography>
                                                <Typography className={classes.listChild}>
                                                    {q.judul}
                                                </Typography>
                                                <Typography className={classes.ListParent}>
                                                    Tahun :
                                         </Typography>
                                                <Typography className={classes.listChild}>
                                                    {q.tahun}
                                                </Typography>
                                        </div>
                                    
                                        </ExpansionPanelSummary>
                                        <Divider/>
                                        <ExpansionPanelDetails>
                                            <List  style={{ width: '100%' }}>
                                            {quisoners.q_user.map((qu,i)=>{
                                                return(
                                                    <ListItem key={qu.nrp}>
                                                        <div style={{ display: 'flex' }}>
                                                            <Typography style={{ margin: '0px 5px' }}>
                                                                {i+1}.
                                                            </Typography>
                                                            <Typography style={{margin:'0px 5px'}}>
                                                                <span style={{ fontWeight: "bold" }}> NAMA :</span>   {qu.nama}
                                                            </Typography>
                                                            <Typography style={{ margin: '0px 5px' }}>
                                                                <span style={{ fontWeight: "bold" }}> NRP :</span> {qu.nrp}
                                                            </Typography>
                                                        </div>

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

DataQuisoner.propTypes = {
    classes: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({
    quisoners: state.quisoners
});

export default compose(withStyles(styles), connect(mapStateToProps, { getAllQuisoner }))(DataQuisoner);

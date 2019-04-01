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
    ListItemText
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
class DataPekerjaan extends Component {
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
    }

    render() {
        const { classes } = this.props;
        return (
            <Layout2 url={'/data-pekerjaan'}>
                <div>
                    <Grid container direction="column" spacing={16}>
                        <Grid item xs={12}>
                            <a href="/data-pekerjaan/create">
                                <Button variant="contained" color="primary">
                                    TAMBAH DATA
              </Button>
                            </a>

                        </Grid>
                        <Grid item xs={12}>
                     

                        </Grid>
                    </Grid>
                </div>
            </Layout2>

        )
    }
}

DataPekerjaan.propTypes = {
    classes: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({
   
});

export default compose(withStyles(styles), connect(null, {  }))(DataPekerjaan);

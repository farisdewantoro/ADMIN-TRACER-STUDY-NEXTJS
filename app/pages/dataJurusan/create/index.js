import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Button,
    TextField,
    AppBar,
    Toolbar
} from '@material-ui/core';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import styles from './styles';
import Layout2 from '../../../components/layout/layout_2';

class CreateDataJurusan extends Component {

  render() {
      const {classes} = this.props;
    return (
        <Layout2 url={'/data-jurusan'}>
      <div>
        <Grid container direction="column" spacing={16}>
            <Grid xs={12}>
                <Card>
                    <CardContent>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
      </div>
     </Layout2>
    )
  }
}

CreateDataJurusan.propTypes = {
    classes:PropTypes.object.isRequired,
 
}

export default compose(
  connect(null),withStyles(styles)
)(CreateDataJurusan); 

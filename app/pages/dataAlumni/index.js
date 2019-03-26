import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import Layout2 from '../../components/layout/layout_2';
import {
  Grid,
  Card,
  CardContent,
  Button
} from '@material-ui/core';
import Link from 'next/link';
class DataAlumni extends Component {


  render() {

    return (
      <Layout2 url={'/data-alumni'}>
        <div>
          <Grid container direction="column" spacing={16}>
          <Grid item xs={12}>
            <Link href="/data-alumni/create">
                <Button variant="contained" color="primary">
                  TAMBAH DATA
              </Button>
            </Link>
     
          </Grid>
            <Grid item xs={12}>
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

export default withStyles(styles)(DataAlumni);
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Layout2 from '../../components/layout/layout_2';
import {
    Grid,
    Card,
    CardContent,
    Button
} from '@material-ui/core';
import Link from 'next/link';
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

    render() {

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

export default withStyles(styles)(DataAdminJurusan);

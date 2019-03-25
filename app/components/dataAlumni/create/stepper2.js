import React, { Component } from 'react'
import Select from '../../common/select';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
    Button,
    CardActions,
    TextField
}
    from '@material-ui/core';

const Stepper2 = (props)=>{
    const {
        ipk,
        lamaTA,
        judulTA,
        tanggalLulus
    } = props.lulusan;
    const { classes, handlerChange } = props;
 
    return (

        <div className={classes.rootTambahData}>
            <Grid container direction="column">
                <Grid item xs={12}>
                    <Card >
                        <CardContent>
                            <TextField
                                label="IPK"
                                name="ipk"
                                value={ipk}
                                InputLabelProps={
                                    { shrink: true }
                                }
                                onChange={handlerChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Judul TA"
                                name="judulTA"
                                value={judulTA}
                                InputLabelProps={
                                    { shrink: true }
                                }
                                onChange={handlerChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Lama TA"
                                name="lamaTA"
                                value={lamaTA}
                                InputLabelProps={
                                    { shrink: true }
                                }
                                onChange={handlerChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Tanggal Lulus"
                                name="tanggalLulus"
                                value={tanggalLulus}
                                InputLabelProps={
                                    { shrink: true }
                                }
                                type="date"
                                onChange={handlerChange}
                                fullWidth
                                margin="normal"
                            />




                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>


    )
}



export default withStyles(styles)(Stepper2);

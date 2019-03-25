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

const Stepper1 = (props) => {

        const { nrp,
            nama,
            email,
            jurusan,
            alamat,
            noTelepon,
            kodePIN
        } = props.mahasiswa;
    const { classes, handlerChange } = props;
        return (
    
                <div className={classes.rootTambahData}>
                    <Grid container direction="column">
                        <Grid item xs={12}>
                            <Card style={{ overflow: 'inherit' }}>
                                <CardContent>
                                    <TextField
                                        label="NRP"
                                        name="nrp"
                                    type="number"
                                        value={nrp}
                                        InputLabelProps={
                                            { shrink: true }
                                        }
                                        onChange={handlerChange}
                                        fullWidth
                                        margin="normal"
                                    />

                                    <TextField
                                        label="Nama Mahasiswa"
                                        name="nama"
                                        value={nama}
                                        InputLabelProps={
                                            { shrink: true }
                                        }
                                        onChange={handlerChange}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Email"
                                        name="email"
                                        value={email}
                                        InputLabelProps={
                                            { shrink: true }
                                        }
                                        onChange={handlerChange}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Kode PIN"
                                        name="kodePIN"
                                        value={kodePIN}
                                        type="number"
                                        InputLabelProps={
                                            { shrink: true }
                                        }
                                        onChange={handlerChange}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <Select />
                                    <TextField
                                        label="No Telepon"
                                        name="noTelepon"
                                        value={noTelepon}
                                        type="number"
                                        InputLabelProps={
                                            { shrink: true }
                                        }
                                        onChange={handlerChange}
                                        fullWidth
                                        margin="normal"
                                    />

                                    <TextField
                                        label="Alamat"
                                        name="alamat"
                                        multiline
                                        rows="4"
                                        value={alamat}
                                        InputLabelProps={
                                            { shrink: true }
                                        }
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


export default withStyles(styles)(Stepper1);

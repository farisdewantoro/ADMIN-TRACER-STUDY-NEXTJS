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

const ListJurusan = (jurusans)=>{

    if(jurusans.jurusan){
       return jurusans.jurusan.map(j => {
            return {
                label:j.nama
            }
        })
    }else{
        return [];
    }

}

const Stepper1 = (props) => {

        const { nrp,
            nama,
            email,
            jurusan,
            alamat,
            noTelepon,
            kodePIN
        } = props.mahasiswa;
    const { classes, handlerChange, errors, jurusans } = props;
 
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
                                        error={errors.mahasiswa && typeof errors.mahasiswa.nrp !== "undefined"}
                                    helperText={errors.mahasiswa  && typeof errors.mahasiswa.nrp !== "undefined" ? errors.mahasiswa.nrp : ''}
                                        onChange={handlerChange}
                                        fullWidth
                                        margin="normal"
                                    />

                                    <TextField
                                        label="Nama Mahasiswa"
                                        name="nama"
                                        value={nama}
                                    error={ errors.mahasiswa && typeof errors.mahasiswa.nama !== "undefined"}
                                    helperText={ errors.mahasiswa && typeof errors.mahasiswa.nama !== "undefined" ? errors.mahasiswa.nama : ''}
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
                                    error={errors.mahasiswa && errors.mahasiswa.email !== "undefined"}
                                    helperText={ errors.mahasiswa && typeof errors.mahasiswa.email !== "undefined" ? errors.mahasiswa.email : ''}

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
                                    error={ errors.mahasiswa && typeof errors.mahasiswa.kodePIN !== "undefined"}
                                    helperText={errors.mahasiswa && typeof errors.mahasiswa.kodePIN !== "undefined" ? errors.mahasiswa.kodePIN : ''}

                                        InputLabelProps={
                                            { shrink: true }
                                        }
                                        onChange={handlerChange}
                                        fullWidth
                                        margin="normal"
                                    />
                                <Select jurusans={ListJurusan(jurusans)}/>
                                    <TextField
                                        label="No Telepon"
                                        name="noTelepon"
                                    error={errors.mahasiswa && typeof errors.mahasiswa.noTelepon !== "undefined"}
                                    helperText={errors.mahasiswa && typeof errors.mahasiswa.noTelepon !== "undefined" ? errors.mahasiswa.noTelepon : ''}

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
                                    error={errors.mahasiswa && typeof errors.mahasiswa.alamat !== "undefined"}
                                    helperText={errors.mahasiswa && typeof errors.mahasiswa.alamat !== "undefined" ? errors.mahasiswa.alamat : ''}

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

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout2 from '../../components/layout/layout_2';
import styles from './styles';
import {
  Grid,
  Button,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  TextField,
  CardMedia,
  CardActions,
  AppBar
} from '@material-ui/core';
class Identitas extends Component {
  constructor(props){
    super(props);
    this.state={
      mahasiswa:{
        nrp:'',
        nama:'',
        email:'',
        jurusan:'',
        alamat:'',
        noTelepon:'',
        kodePIN:''
      }
    }
  }

  handlerOnChange = (e) =>{
    let value = e.target.value;
    let name=e.target.name;
    this.setState(prevState=>({
      mahasiswa:{
        ...prevState,
        [name]:value
      }
    }));
  }
  render() {
    const { classes } = this.props;
    const {nrp,nama,email,jurusan,alamat,noTelepon,kodePIN} = this.state.mahasiswa;
    return (
     
        <Layout2>
        <div>
            <Grid container >
                <Grid item xs={12}>
              <Card>
                <CardContent>
                    <Grid container justify="center" direction="row">
                        <Grid item md={10}>
                        <Grid container >
                        <Typography className={classes.rootTitle}>
                          Personal Information
                        </Typography>
                        </Grid>
                        <div style={{padding:"10px 0 40px"}}>
                        <Grid container justify="center" direction="row" spacing={32}>
                          <Grid item md={4}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                className={classes.media}
                                height="200"
                                image="/static/noImage.png"
                                title="Contemplative Reptile"
                              />
                              <Typography>
                                NO IMAGE
                            </Typography>
                            </CardActionArea>
                          </Grid>
                          <Grid item md={8}>

                            <div>
                              <TextField
                                label="NRP"
                                value={nrp}
                                name="nrp"
                                disabled
                                InputLabelProps={
                                  { shrink: true }
                                }
                                margin="normal"
                                fullWidth
                                onChange={this.handlerOnChange}
                              />
                              <TextField
                                label="Nama"
                                value={nama}
                                name="nama"
                                InputLabelProps={
                                  { shrink: true }
                                }
                                margin="normal"
                                fullWidth
                                onChange={this.handlerOnChange}
                              />
                              <TextField
                                label="No Telepon"
                                value={noTelepon}
                                name="noTelepon"
                                type="number"
                                InputLabelProps={
                                  { shrink: true }
                                }
                                margin="normal"
                                fullWidth
                                onChange={this.handlerOnChange}
                              />
                              <TextField
                                label="Alamat"
                                value={alamat}
                                name="alamat"
                                multiline
                                rows="4"
                                InputLabelProps={
                                  { shrink: true }
                                }
                                margin="normal"
                                fullWidth
                                onChange={this.handlerOnChange}
                              />
                            </div>
                          </Grid>
                        </Grid>
                        </div>
                        
                
                        </Grid>
                    </Grid>
                </CardContent>
            
                    
                  <AppBar position="static" color="default" elevation={0}>
                    <Grid container justify="flex-end">
                      <div >
                        <Button style={{margin:5}}>
                          BATAL
                  </Button>
                      <Button style={{ margin: 5 }}>
                          SIMPAN
                  </Button>
                      </div>
                    </Grid>
                        </AppBar>
                   
                      
               
              </Card>
                </Grid>
            </Grid>
        </div>
        </Layout2>

     
    )
  }
}

Identitas.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Identitas);
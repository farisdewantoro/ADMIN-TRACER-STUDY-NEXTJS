import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Layout2 from '../../components/layout/layout_2';
import {
    Grid,
    Card,
    CardContent,
    Button,
    Typography,
    IconButton,
    Divider,
    Paper,
    InputBase,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { getAllPekerjaan, deletePekerjaan} from '../../actions/MahasiswaActions';
import DialogDelete from '../../components/common/DialogDelete';
import moment from 'moment';
import CreateIcon from '@material-ui/icons/Create';
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
    state={
        dialogDelete:false,
        mahasiswa_id:0
    }


    componentDidMount() {
        this.props.getAllPekerjaan();
    }
    openDialogDelete=(id)=>{
        this.setState({ dialogDelete: true, mahasiswa_id:id });
      }
      closeDialogDelete=()=>{
        this.setState({ dialogDelete: false,mahasiswa_id:0 });
      }
    
      dialogDeleteSubmit = ()=>{
       
        this.props.deletePekerjaan(this.state.mahasiswa_id);
      }
    

    render() {
        const { classes,mahasiswas} = this.props;
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

 <Paper className={classes.root} elevation={1}>
                <IconButton className={classes.iconButton} aria-label="Search">
                  <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} />
                <InputBase className={classes.input} placeholder="Search " />
         
                <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
                  <DirectionsIcon />
                </IconButton>
              </Paper>
          </Grid>
            {mahasiswas.pekerjaan.map((m,i)=>{
              return(
                <Grid item xs={12} key={m.id}>
                  <Card className={classes.card}>
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Grid container alignItems="center" direction="row" spacing={16}>
                          <Grid item md={12}>
                            <Typography variant="h6" color="primary">
                           {m.nama} - {m.nrp}
                   </Typography>
                          </Grid>
                          <Grid item md={12}>
                            <div className={classes.box}>
                              <div className={classes.card}>
                                <Typography className={classes.ListParent}>
                                  Nama Perusahaan :
                   </Typography>
                                <Typography className={classes.listChild}>
                                  {m.namaPerusahaan}
                   </Typography>

                                <Typography className={classes.ListParent}>
                                  Tempat :
                   </Typography>
                                <Typography className={classes.listChild}>
                                  {m.tempat}
                   </Typography>

                                <Typography className={classes.ListParent}>
                                  Tanggal Masuk :
                   </Typography>
                                <Typography className={classes.listChild}>
                                  {moment(m.tanggalMasuk).format('LL')}
                   </Typography>
                   <Typography className={classes.ListParent}>
                                  Jabatan :
                   </Typography>
                   <Typography className={classes.listChild}>
                                 {m.jabatan}
                   </Typography>


                              </div>

                              <div className={classes.action}>
                              <a href={`/data-pekerjaan/edit/${m.nrp}`}>
                                <IconButton>
                                  <CreateIcon />
                                </IconButton>
                                </a>
                                <IconButton onClick={()=>this.openDialogDelete(m.id)}>
                                    <DeleteIcon/>
                                  </IconButton>
                           
                              </div>


                            </div>

                          </Grid>

                        </Grid>

                      </CardContent>
                    </div>
                  </Card>
                </Grid>
              )
            })}
            
                    </Grid>
                    <DialogDelete
            openDialogDelete={this.openDialogDelete}
            closeDialogDelete={this.closeDialogDelete}
            dialogDelete={this.state.dialogDelete}
            dialogDeleteSubmit={this.dialogDeleteSubmit}
          />
                </div>
            </Layout2>

        )
    }
}

DataPekerjaan.propTypes = {
    classes: PropTypes.object.isRequired,
    mahasiswas: PropTypes.object.isRequired,
    getAllPekerjaan: PropTypes.func.isRequired,
  deletePekerjaan:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
   mahasiswas:state.mahasiswas
});

export default compose(withStyles(styles), connect(mapStateToProps, {deletePekerjaan,getAllPekerjaan  }))(DataPekerjaan);

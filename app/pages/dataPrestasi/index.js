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
import {getAllPrestasi} from '../../actions/MahasiswaActions';
import DialogDelete from '../../components/common/DialogDelete';
import moment from 'moment';
import CreateIcon from '@material-ui/icons/Create';
class DataPrestasi extends Component {
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
        this.props.getAllPrestasi();
    }
    openDialogDelete=(id)=>{
        this.setState({ dialogDelete: true, mahasiswa_id:id });
      }
      closeDialogDelete=()=>{
        this.setState({ dialogDelete: false,mahasiswa_id:0 });
      }

      dialogDeleteSubmit = ()=>{
        this.props.deleteMahasiswa(this.state.mahasiswa_id);
      }


    render() {
        const { classes,mahasiswas} = this.props;
        return (
            <Layout2 url={'/data-prestasi'}>
                <div>
                    <Grid container direction="column" spacing={16}>
                        <Grid item xs={12}>
                            <a href="/data-prestasi/create">
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
            {mahasiswas.prestasi.map((m,i)=>{
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
                                  Nama Prestasi :
                   </Typography>
                                <Typography className={classes.listChild}>
                                  {m.namaPrestasi}
                   </Typography>

                                <Typography className={classes.ListParent}>
                                  Jenis Prestasi :
                   </Typography>
                                <Typography className={classes.listChild}>
                                  {m.jenisPrestasi}
                   </Typography>



                   <Typography className={classes.ListParent}>
                                  Tahun :
                   </Typography>
                   <Typography className={classes.listChild}>
                                 {m.tahun}
                   </Typography>


                              </div>

                              <div className={classes.action}>
                              <a href={`/data-prestasi/edit/${m.nrp}`}>
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

DataPrestasi.propTypes = {
    classes: PropTypes.object.isRequired,
    mahasiswas: PropTypes.object.isRequired,
    getAllPrestasi: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
   mahasiswas:state.mahasiswas
});

export default compose(withStyles(styles), connect(mapStateToProps, {getAllPrestasi  }))(DataPrestasi);

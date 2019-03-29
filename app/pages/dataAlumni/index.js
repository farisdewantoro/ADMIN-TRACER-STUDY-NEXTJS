import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import Layout2 from '../../components/layout/layout_2';
import {
  Grid,
  Card,
  CardContent,
  Button,
  CardMedia,
  Typography,
  Divider,
  IconButton,
  Paper,
  InputBase,
  TextField
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { getAllMahasiswa, deleteMahasiswa} from '../../actions/MahasiswaActions';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import DialogDelete from '../../components/common/DialogDelete';

class DataAlumni extends Component {
  static async getInitialProps(something) {
    const { res,req} = something;
    if(!req.user){
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
  componentDidMount(){
    this.props.getAllMahasiswa();
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.notifications !== this.state.notifications ){
      this.setState({
        mahasiswa_id:0,
        dialogDelete:false
      })
    }
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
    const {classes,mahasiswas} = this.props;
    return (
      <Layout2 url={'/data-alumni'} >
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
            {mahasiswas.mahasiswa.map((m,i)=>{
              return(
                <Grid item xs={12} key={m.id}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cover}
                      image="/static/noImage.png"
                      title="Live from space album cover"
                    />
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Grid container alignItems="center" direction="row" spacing={16}>
                          <Grid item md={12}>
                            <Typography variant="h6" color="primary">
                            {m.nama}
                   </Typography>
                          </Grid>
                          <Grid item md={12}>
                            <div className={classes.box}>
                              <div className={classes.card}>
                                <Typography className={classes.ListParent}>
                                  NRP :
                   </Typography>
                                <Typography className={classes.listChild}>
                                  {m.nrp}
                   </Typography>

                                <Typography className={classes.ListParent}>
                                  Jurusan :
                   </Typography>
                                <Typography className={classes.listChild}>
                                  {m.jurusan}
                   </Typography>

                                <Typography className={classes.ListParent}>
                                  Tanggal Lulus :
                   </Typography>
                                <Typography className={classes.listChild}>
                                  {moment(m.tanggalLulus).format('LL')}
                   </Typography>


                              </div>

                              <div className={classes.action}>
                              <a href={`/data-alumni/edit/${m.nrp}`}>
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


DataAlumni.propTypes={
  getAllMahasiswa:PropTypes.func.isRequired,
  mahasiswas:PropTypes.object.isRequired,
  classes:PropTypes.object.isRequired,
  deleteMahasiswa:PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
  mahasiswas:state.mahasiswas,
  notifications:state.notifications
});


export default compose(connect(mapStateToProps, { getAllMahasiswa, deleteMahasiswa}),withStyles(styles))(DataAlumni);

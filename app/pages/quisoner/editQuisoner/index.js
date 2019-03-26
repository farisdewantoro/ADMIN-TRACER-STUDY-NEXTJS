import React, { Component } from 'react'
import Layout2 from '../../../components/layout/layout_2';
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Button,
  Paper,
  AppBar,
  Toolbar,
  Divider,
  FormControlLabel,
  Radio,
  Checkbox,
  IconButton
} from '@material-ui/core';
import update from 'react-addons-update';
import CloseIcon from '@material-ui/icons/Close';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Link from 'next/link';
class EditQuisoner extends Component {
  state={
      q_pertanyaan:[
        {kode:'',pertanyaan:'',q_jawaban:[
            {kode:'',jawaban:'',additional:false,q_jawaban_lainnya:{}},
          ]
        }
      ],
  }
  handlerOnChangePertanyaan = (iq)=> (e)=>{

    let name = e.target.name;
    let val = e.target.value;
    this.setState({
      q_pertanyaan: update(this.state.q_pertanyaan, { [iq]: {[name]:{$set:val} } })
    });
  }
  addNewPertanyaan = ()=>{
    this.setState({
      q_pertanyaan: this.state.q_pertanyaan.concat({
        kode: '', pertanyaan: '', q_jawaban: [
          { kode: '', jawaban: '', additional: false, q_jawaban_lainnya: [] }
        ]
      })
    })
  }
  addNewJawaban = (iq)=>{ 
    this.setState({
      q_pertanyaan: update(this.state.q_pertanyaan, { [iq]: { q_jawaban: { $push: [{ kode: '', jawaban: '', additional: false, q_jawaban_lainnya:{} }] } } })
    });
   
  }
  handlerDeletePertanyaan = (iq)=>{
   let tes =  this.state.q_pertanyaan.filter((d, i) => i !==  iq);

    if(this.state.q_pertanyaan.length > 1){
      this.setState({
        q_pertanyaan: this.state.q_pertanyaan.filter((d, i) => i !==  iq)
      });
    }
    return;
 
  }
  handlerDeleteJawaban = (iq,ij) => {
    let _jawaban = this.state.q_pertanyaan[iq].q_jawaban.filter((d,i)=>i!== ij);
    if(_jawaban.length > 0){
      
      this.setState({
        q_pertanyaan: update(this.state.q_pertanyaan, { [iq]: { q_jawaban: { $set: _jawaban } } })
      });
    }
    return;
    
  }
  handlerChangeJawaban = (iq,ij) =>(e)=>{
    let name = e.target.name;
    let val = e.target.value;
      this.setState({
        q_pertanyaan: update(this.state.q_pertanyaan, { [iq]: { q_jawaban: {[ij]:{[name]:{$set:val}} } } })
      });
    
  }
  handlerAddAdditional = (iq,ij)=>{
    this.setState({
      q_pertanyaan: update(this.state.q_pertanyaan, 
        {[iq]:{ q_jawaban: {[ij]:{additional:{$set:true},q_jawaban_lainnya: { $set:{ description: '', value: ''}}}}}  })
    });
  }
  handlerDeleteAdditional = (iq,ij)=>{
    this.setState({
      q_pertanyaan: update(this.state.q_pertanyaan,
        { [iq]: { q_jawaban: { [ij]: { additional: { $set: false }, q_jawaban_lainnya: { $set: {  } } } } } })
    });
  }
  handlerChangeJawabanLainnya = (iq, ij)=> (e) =>{
    const val = e.target.value;
    this.setState({
      q_pertanyaan: update(this.state.q_pertanyaan,
        { [iq]: { q_jawaban: { [ij]: { additional: { $set: true }, q_jawaban_lainnya: { $set: { description:val, value: '' } } } } } })
    });
  }
  render() {
    const { q_pertanyaan} = this.state;
 
    return (
      <Layout2 url={'/data-quisoner'}>
        <div style={{paddingBottom:"20px"}}>
        {/* <Typography>
            FORM QUISONER
        </Typography> */}
            <Grid container direction="column">
                <Grid item xs={12}>
                  <Card>
            
                    <CardContent>
                        <Grid container direction="column" spacing={16} >
                    {q_pertanyaan.map((qp,iQ)=>{
                        return(
                          <Grid item md={12} key={iQ}>
                            <Card>
                              <CardContent>
                                <Grid container alignItems="center" spacing={16}>
                                  <Grid item md={1}>
                                    <TextField
                                      label="Kode"
                                      name="kode"
                                      multiline
                                      value={qp.kode}
                                      rows="2"
                                      fullWidth
                                      onChange={this.handlerOnChangePertanyaan(iQ)}
                                    />
                                  </Grid>
                                  <Grid item md={10}>
                                    <TextField
                                      label="Pertanyaan"
                                      name="pertanyaan"
                                      value={qp.pertanyaan}
                                      multiline
                                      rows="2"
                                      fullWidth
                                      onChange={this.handlerOnChangePertanyaan(iQ)}
                                    />
                                  </Grid>
                                  <Grid item md={1}>
                                    <IconButton onClick={() => this.handlerDeletePertanyaan(iQ)}>
                                      <CloseIcon />
                                    </IconButton>
                                  </Grid>

                                </Grid>

                                <div style={{ padding: 20 }}>
                                  <Typography >
                                    Jawaban :
                            </Typography>
                                  <Grid container direction="column">

                            {qp.q_jawaban.map((qj,iJ)=>{
                              return(
                                <Grid item md={12} key={iJ}>
                                <div>
                                    <Grid container direction="row" alignItems="center" spacing={16}>
                                      <Grid item md={1}>
                                        <Grid container justify="flex-end">
                                          <Radio disabled />
                                        </Grid>

                                      </Grid>
                                      <Grid item md={1}>
                                        <TextField
                                          placeholder="Kode"
                                          name="kode"
                                          value={qj.kode}
                                          onChange={this.handlerChangeJawaban(iQ, iJ)}
                                          fullWidth
                                        />
                                      </Grid>
                                      <Grid item md={8}>
                                        <TextField
                                          value={qj.jawaban}
                                          name="jawaban"
                                          onChange={this.handlerChangeJawaban(iQ, iJ)}
                                          fullWidth
                                        />
                                      </Grid>
                                      <Grid item md={2}>
                                        <div style={{ display: "flex" }}>
                                          <IconButton onClick={() => this.handlerDeleteJawaban(iQ, iJ)}>
                                            <CloseIcon />
                                          </IconButton>
                                          {!qj.additional && (
                                            <IconButton onClick={() => this.handlerAddAdditional(iQ, iJ)}>
                                              <PlaylistAddIcon  />
                                            </IconButton>
                                          )}
                                         
                                        </div>
                                      </Grid>
                                    </Grid>
                                    {qj.additional && (
                                      <Grid container justify="center" direction="column" alignItems="center" spacing={16}>
                                              <Grid item md={10}>
                                                <div style={{display:"flex",justifyContent:"flex-end"}}>
                                            <Radio disabled />
                                            <TextField
                                              placeholder="Description"
                                              name="description"
                                              onChange={this.handlerChangeJawabanLainnya(iQ, iJ)}
                                              style={{margin:"0px 10px"}}
                                            />
                                            <TextField
                                              placeholder="Jawaban dari user"
                                              style={{ margin: "0px 10px" }}
                                              disabled
                                            />
                                            <IconButton onClick={() => this.handlerDeleteAdditional(iQ, iJ)}>
                                              <CloseIcon />
                                            </IconButton>
                                                </div>
                                              </Grid>
                                      </Grid>
                                    )}

                                </div>
                            
                                </Grid>
                              )
                            })}
                              
                                  </Grid>
                                  <div style={{ margin: "10px 0" }}>
                                    <Grid container direction="row" alignItems="center">
                                      {/* <Radio disabled /> */}
                                      <Button variant="outlined" onClick={()=>this.addNewJawaban(iQ)}>
                                        Tambah Opsi
                                  </Button>

                                    </Grid>
                                  </div>



                                </div>

                              </CardContent>
                            </Card>
                          </Grid>
                        )
                    })}
                           
                        </Grid>
                      <div style={{margin:"20px 0"}}>
                        <Button fullWidth variant="outlined" onClick={this.addNewPertanyaan}>
                      TAMBAH PERTANYAAN
                        </Button>
                      </div>
                      
                    </CardContent>
                <AppBar position="static" color="default" elevation={0}>
                        <Toolbar>
                    <Button variant="contained" color="primary" style={{ margin: "0px 5px" }}>  
                                SAVE
                            </Button>
                          <Link href="/data-quisoner">
                      <Button variant="flat" style={{ margin: "0px 5px" }} color="primary" >
                        CANCEL
                            </Button>
                          </Link>
                        
                        </Toolbar>
                    </AppBar>
                  </Card>
                </Grid>
            </Grid>
        </div>
      </Layout2>
     
    )
  }
}

export default EditQuisoner

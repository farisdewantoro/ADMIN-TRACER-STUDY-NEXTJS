import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import PropTypes from 'prop-types';
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  TextField,
  Typography,
  Button,
  Input,
  InputBase,
  InputLabel,
  FormControl 
} from '@material-ui/core';
import Layout1 from '../layout/layout_1';
import {submitLogin} from '../../actions/authActions';
import {connect} from 'react-redux';
import {compose} from 'redux';

 class Login extends Component {
   state={
     nrp:'',
     kodePIN:''
   }

   onChange = (e)=>{
     this.setState({
       [e.target.name]:e.target.value
     })
   }
   onSubmitLogin=()=>{
     let data={
        nrp:this.state.nrp.toString(),
        kodePIN:this.state.kodePIN.toString()
     }
     this.props.submitLogin(data);
   }
   
  render() {

    const {classes} = this.props;
    const { nrp, kodePIN} = this.state;
    return (
      <div>
        <Layout1>
          <Grid container justify="center" >
          <Grid item md={4}>
              <Card >
                <CardHeader
                  title={<div>
                    <Grid container direction="column">
                      <Grid item md={12}>
                        <Grid container justify="center">
                          <img src='/static/logoItenas2.png' style={{ maxWidth: "100%", maxHeight: "100px" }} alt="ITENAS LOGO" />
                        </Grid>
                      </Grid>
                      <Grid item md={12}>
                        <Grid container justify="center">
                          <Typography variant="h4">
                            Tracer Study
                      </Typography>
                        </Grid>

                      </Grid>


                    </Grid>

                  </div>}
                      />
                <CardContent >

                  <Grid container direction="column" spacing={16}>
                    <Grid item xs={12}>
                      <FormControl className={classes.margin} fullWidth>
                        <InputLabel shrink htmlFor="nrp" className={classes.bootstrapFormLabel}>
                          NRP
                        </InputLabel>
                        <InputBase
                          id="nrp"
                          name="nrp"
                          type="number"
                          value={nrp}
                          onChange={this.onChange}
                          classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                          }}
                        />
                      </FormControl>

                    </Grid>
                    <Grid item xs={12}>
                      <FormControl className={classes.margin} fullWidth>
                        <InputLabel shrink htmlFor="pin" className={classes.bootstrapFormLabel}>
                          Kode PIN
                        </InputLabel>
                        <InputBase
                          id="pin"
                          name="kodePIN"
                          type="number"
                          value={kodePIN}
                          type="password"
                          onChange={this.onChange}
                          classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                          }}
                        />
                      </FormControl>

                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>

                  <Button variant="contained" style={{ margin: "20px 0",borderRadius:"15px" }} color="primary" fullWidth onClick={this.onSubmitLogin}>
                    Sign In
                       </Button>
                </CardActions>

              </Card>
        
          


            </Grid>
          </Grid>
        </Layout1>
      </div>
    )
  }
}

Login.propTypes={
  classes:PropTypes.object.isRequired,
  submitLogin:PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
  auths:state.auths
})

export default compose(withStyles(styles),connect(mapStateToProps,{submitLogin}))(Login);
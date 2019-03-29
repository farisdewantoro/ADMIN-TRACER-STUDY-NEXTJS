import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
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
  FormControl,
  LinearProgress,
  FormHelperText
} from '@material-ui/core';
import { submitLogin } from '../../actions/authActions';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Login extends Component {
  static async getInitialProps(something) {
    const { res, req } = something;
    if (req && req.user) {
      res.writeHead(302, {
        Location: '/data-alumni'
      })
      res.end()
    }

  }
  state = {
    username: '',
    password: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmitLogin = (e) => {
    e.preventDefault();
    let data = {
      username: this.state.username.toString(),
      password: this.state.password.toString()
    }
    this.props.submitLogin(data);
 
  }

  render() {

    const { classes, errors,auths } = this.props;
    const { username, password } = this.state;
    return (
      <div style={{ background:"#f58220",minHeight:"100vh"}}>
          <Grid container justify="center" >
            <Grid item md={4}>
       
            <Card style={{marginTop:"20px"}}>
              {auths.loading && (
                <LinearProgress color="secondary" />
              )}
            
              <form onSubmit={this.onSubmitLogin}>
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
                           Admin Tracer Study
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
                        <InputLabel shrink htmlFor="username" className={classes.bootstrapFormLabel}>
                          Username
                        </InputLabel>
                        <InputBase
                          id="username"
                          name="username"
                          required
                          value={username}
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
                          Password
                        </InputLabel>
                        <InputBase
                          id="pin"
                          name="password"
                          type="number"
                          value={password}
                          type="password"
                          required
                          onChange={this.onChange}
                          classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                          }}
                        />
                      </FormControl>

                    </Grid>
                  
                      <FormHelperText error variant='filled'>
                        {errors.error}
                      </FormHelperText>
                
                  </Grid>
                </CardContent>
                <CardActions>

                  <Button variant="contained" style={{ margin: "20px 0", borderRadius: "15px" }} color="primary" fullWidth 
                  // onClick={this.onSubmitLogin}
                  type="submit"
                  >
                    Sign In
                       </Button>
                </CardActions>
          </form>
              </Card>




            </Grid>
          </Grid>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  submitLogin: PropTypes.func.isRequired,
  errors:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auths: state.auths,
  errors:state.errors
});

export default compose(withStyles(styles), connect(mapStateToProps, { submitLogin }))(Login);
import React, { Component } from 'react'
import {
    Grid,
    TextField,
    Card,
    CardContent,
    Button,
    CardActions
} from '@material-ui/core';
import Layout2 from '../../../components/layout/layout_2';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import styles from './styles';
import {withStyles} from '@material-ui/core/styles';
import {getAllJurusan} from '../../../actions/JurusanActions';
import Select from '../../../components/common/select';
import {createAdmin} from '../../../actions/AdminActions';
const ListJurusan = (jurusans) => {

    if (jurusans.jurusan) {
        return jurusans.jurusan.map(j => {
            return {
                label: j.nama,
                value: j.id
            }
        })
    } else {
        return [];
    }

}
class DataAdminJurusanCreate extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            passwordConf:'',
            jurusan:'',
        }
    }
    componentDidMount(){
        this.props.getAllJurusan();
    }
    handlerChangeJurusan = (e) => {
        this.setState({
                jurusan: e
            }
        )
    }
    handleOnChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const {username,password,jurusan,passwordConf} = this.state;
        const data={
            username,
            password,
            passwordConf,
            jurusan
        }
        this.props.createAdmin(data);

    }

  render() {
      const {classes,jurusans} = this.props;
      const { username, password, hak_akses, jurusan, passwordConf} = this.state;
    return (
        <Layout2 url={`/data-admin-jurusan`}>
            <div>
                <Grid container direction="column" spacing={16}>
                    <Grid item xs={12}>
                        <Card style={{overflow:'inherit'}}>
                        <form onSubmit={this.handleSubmit}>
                            <CardContent>
                                <TextField
                                    label="Username"
                                    name="username"
                                    
                                    value={username}
                                    InputLabelProps={{
                                        shrink:true
                                    }}
                                    fullWidth
                                    margin="normal"
                                    onChange={this.handleOnChange}
                                />
                                <Grid container direction="row" spacing={16}>
                                    <Grid item md={6}>
                                        <TextField
                                            label="Password"
                                            name="password"
                                            
                                            value={password}
                                            type="password"
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            fullWidth
                                            margin="normal"
                                            onChange={this.handleOnChange}
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <TextField
                                            label="Confirm"
                                            
                                            name="passwordConf"
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            value={passwordConf}
                                            type="password"
                                            fullWidth
                                            margin="normal"
                                            onChange={this.handleOnChange}
                                        />
                                    </Grid>
                                </Grid>
                                <Select jurusans={ListJurusan(jurusans)}
                                    jurusan={jurusan}
                                    handlerChangeJurusan={this.handlerChangeJurusan} />
                           
                       
                            </CardContent>
                            <CardActions>
                                <Button  color="primary" type="submit" variant="contained">    
                                    SUBMIT
                                </Button>
                                <Button variant="outlined">
                                    CANCEL
                                </Button>
                            </CardActions>
                            </form>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Layout2>
  
    )
  }
}

DataAdminJurusanCreate.propTypes={
    classes:PropTypes.object.isRequired,
    getAllJurusan:PropTypes.func.isRequired,
    jurusans:PropTypes.object.isRequired,
    createAdmin:PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
    jurusans:state.jurusans
});

export default compose(withStyles(styles), connect(mapStateToProps, { getAllJurusan, createAdmin}))
(DataAdminJurusanCreate);

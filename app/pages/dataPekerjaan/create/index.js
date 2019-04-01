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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Select from '../../../components/common/select';
import SelectDynamic from '../../../components/common/selectDynamic';
import { getAllJurusan } from '../../../actions/JurusanActions';
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
class DataPekerjaanCreate extends Component {
    static async getInitialProps(something) {
        const { res, req } = something;
        if (!req.user) {
            res.writeHead(302, {
                Location: '/login'
            })
            res.end()
        }

    }
    constructor() {
        super();
        this.state = {
            jurusan:''
        }
    }
    componentDidMount() {
        this.props.getAllJurusan();
    }
    handlerChangeJurusan = (e) => {
        this.setState({
            jurusan: e
        }
        )
    }
    handleOnChange = (e) => {

    }
    handleSubmit = (e) => {
 

    }

    render() {
        const { classes, jurusans } = this.props;
        const { jurusan} = this.state;
        return (
            <Layout2 url={`/data-pekerjaan`}>
                <div>
                    <Grid container direction="column" spacing={16}>
                        <Grid item xs={12}>
                            <Card style={{ overflow: 'inherit' }}>
                                <form onSubmit={this.handleSubmit}>
                          
                                    <CardContent>
                                        <Select jurusans={ListJurusan(jurusans)}
                                            jurusan={jurusan}
                                            handlerChangeJurusan={this.handlerChangeJurusan} />
                                        <SelectDynamic label="NRP" />
                                        <TextField
                                            label="Nama"
                                            name="nama"
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            fullWidth
                                            margin="normal"
                                            onChange={this.handleOnChange}
                                        />
                                        <TextField
                                            label="Nama Perusahaan"
                                            name="namaPerusahaan"
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            fullWidth
                                            margin="normal"
                                            onChange={this.handleOnChange}
                                        />
                                        <TextField
                                            label="Tempat"
                                            name="tempat"
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            fullWidth
                                            margin="normal"
                                            onChange={this.handleOnChange}
                                        />
                                        <TextField
                                            label="Jabatan"
                                            name="jabatan"
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            fullWidth
                                            margin="normal"
                                            onChange={this.handleOnChange}
                                        />
                                 
                                  


                                    </CardContent>
                                    <CardActions>
                                        <Button color="primary" type="submit" variant="contained">
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

DataPekerjaanCreate.propTypes = {
    classes: PropTypes.object.isRequired,
    jurusans:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    jurusans:state.jurusans
});

export default compose(withStyles(styles), connect(mapStateToProps, { getAllJurusan }))
    (DataPekerjaanCreate);

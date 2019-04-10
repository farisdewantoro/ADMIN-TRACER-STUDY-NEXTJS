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
import {getAllMahasiswa,addPrestasi} from '../../../actions/MahasiswaActions';
import moment from 'moment';
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

const ListMahasiswa = (mahasiswas) => {

    if (mahasiswas.mahasiswa) {
        return mahasiswas.mahasiswa.map(m => {
            return {
                label: m.nrp,
                value: m.id,
                nama:m.nama
            }
        })
    } else {
        return [];
    }

}



class DataPrestasiCreate extends Component {
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
            jurusan:'',
            nrp:'',
            nama:'',
            namaPrestasi:'',
            jenisPrestasi:'',
            tahun:''

        }
    }
    componentDidMount() {
        this.props.getAllJurusan();
        this.props.getAllMahasiswa();
    }
    handlerChangeJurusan = (e) => {
        this.setState({
            jurusan: e
        }
        )
    }
    handlerChangeMahasiswa = (e) =>{
        let val = {
            label:e.label,
            value:e.value
        }
        this.setState({
            nrp: val,
            nama:e.nama
        }
        )
    }
    handleOnChange = (e) => {
        let nama = e.target.name;
        let value = e.target.value;
        this.setState({
            [nama]:value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let data = this.state;
        this.props.addPrestasi(data);

    }

    render() {
        const { classes, jurusans,mahasiswas } = this.props;
        const { jurusan,nama,nrp,tanggalMasuk,jenisPrestasi,tahun,namaPrestasi} = this.state;
        return (
            <Layout2 url={`/data-prestasi`}>
                <div>
                    <Grid container direction="column" spacing={16}>
                        <Grid item xs={12}>
                            <Card style={{ overflow: 'inherit' }}>
                                <form onSubmit={this.handleSubmit}>

                                    <CardContent>
                                        <Select jurusans={ListJurusan(jurusans)}
                                            jurusan={jurusan}
                                            handlerChangeJurusan={this.handlerChangeJurusan} />
                                        <SelectDynamic
                                        label="NRP"
                                        value={nrp}
                                        options={ListMahasiswa(mahasiswas)}
                                        handleChange={this.handlerChangeMahasiswa}
                                        />
                                        <TextField
                                            label="Nama"
                                            name="nama"
                                            value={nama}
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            disabled
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            label="Nama Prestasi"
                                            name="namaPrestasi"
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            value={namaPrestasi}
                                            fullWidth
                                            margin="normal"
                                            onChange={this.handleOnChange}
                                        />

                                        <TextField
                                            label="Jenis Prestasi"
                                            name="jenisPrestasi"
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            value={jenisPrestasi}
                                            fullWidth
                                            margin="normal"
                                            onChange={this.handleOnChange}
                                        />
                                        <TextField
                                            label="Tahun"
                                            name="tahun"
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            type="number"
                                            fullWidth
                                            value={tahun}
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

DataPrestasiCreate.propTypes = {
    classes: PropTypes.object.isRequired,
    jurusans:PropTypes.object.isRequired,
    getAllMahasiswa:PropTypes.func.isRequired,
    getAllMahasiswa:PropTypes.func.isRequired,
    addPrestasi:PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    jurusans:state.jurusans,
    mahasiswas:state.mahasiswas
});

export default compose(withStyles(styles), connect(mapStateToProps, { getAllJurusan,getAllMahasiswa,addPrestasi }))
    (DataPrestasiCreate);

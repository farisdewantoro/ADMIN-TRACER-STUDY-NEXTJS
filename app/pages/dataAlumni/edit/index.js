import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
    Stepper1,
    Stepper2
} from '../../../components/dataAlumni/create';
import Layout2 from '../../../components/layout/layout_2';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import styles from './styles';
import {createMahasiswa} from '.././../../actions/MahasiswaActions';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { getAllJurusan } from '../../../actions/JurusanActions';
function getSteps() {
    return ['DATA MAHASISWA', 'DATA LULUSAN'];
}



class EditDataAlumni extends React.Component {
    state = {
        activeStep: 0,
        skipped: new Set(),
        mahasiswa: {
            nrp: '',
            nama: '',
            email: '',
            jurusan: '',
            alamat: '',
            noTelepon: '',
            kodePIN: '',
        },
        lulusan:{
            ipk: '',
            lamaTA: '',
            judulTA: '',
            tanggalLulus: ''
        }
    };
    componentDidMount(){
        this.props.getAllJurusan();
        console.log(this.props);
    }
    handlerChangeMahasiswa = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => ({
            mahasiswa: {
                ...prevState.mahasiswa,
                [name]: value
            }
        }));
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors !== this.props.errors){
            if(Object.keys(nextProps.errors).length > 0){
                this.setState({
                    activeStep:0
                })
            }
        }
        if (nextProps.notifications !== this.props.notifications && typeof nextProps.notifications.error !== "undefined" && !nextProps.notifications.error ){
            const { activeStep } = this.state;
            this.setState({
                activeStep: activeStep + 1
            })
        }
    }

    handlerChangeLulusan = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => ({
            lulusan: {
                ...prevState.lulusan,
                [name]: value
            }
         
        }));
    }
    handlerChangeJurusan = (e)=>{
       let val = e.value;
       this.setState(prevState=>({
           mahasiswa:{
               ...prevState.mahasiswa,
               jurusan:e
           }
       }))
    }

    getStepContent = (step)=>{
        switch (step) {
            case 0:
                return (
                    <Stepper1
                    mahasiswa={this.state.mahasiswa}
                    handlerChange={this.handlerChangeMahasiswa}
                    errors={this.props.errors}
                    jurusans={this.props.jurusans}
                    handlerChangeJurusan={this.handlerChangeJurusan}
                    />
                );
            case 1:
                return (
                    <Stepper2 
                        lulusan={this.state.lulusan}
                        handlerChange={this.handlerChangeLulusan}
                        errors={this.props.errors}
                    />
                );
            default:
                return 'Unknown step';
        }
    }
    isStepOptional = step => step === 1;

    handleNext = () => {
        const { activeStep } = this.state;
        if (activeStep === getSteps().length - 1) {
            this.handleFinishSubmit();
        }else{
            this.setState({
                activeStep: activeStep + 1,
            });
        }
       
     

    };

    handleFinishSubmit = ()=>{
        let mahasiswa = this.state.mahasiswa;
        let lulusan = this.state.lulusan;
        let data={
            mahasiswa,
            lulusan
        }

        this.props.createMahasiswa(data);
    }

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleSkip = () => {
        const { activeStep } = this.state;
        if (!this.isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        this.setState(state => {
            const skipped = new Set(state.skipped.values());
            skipped.add(activeStep);
            return {
                activeStep: state.activeStep + 1,
                skipped,
            };
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };
    handleReload = ()=>{
        window.location.reload();
    }



    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        return (
            <Layout2 url={'/data-alumni'}>
                <div className={classes.root}>
                    <Card>
                        {/* <CardHeader
                            title={<Typography variant="h6" style={{textAlign:"center"}}>
                                FORM DATA ALUMNI
                            </Typography>}
                        /> */}
                        <Stepper activeStep={activeStep} >
                            {steps.map((label, index) => {
                                const props = {};
                                const labelProps = {};
                          
                           
                                return (
                                    <Step key={label} {...props}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </Card>
                
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className={classes.instructions}>
                                   Data mahasiswa telah berhasil dibuat.
              </Typography>
                                <Button onClick={this.handleReload} variant="contained" color="primary" className={classes.button}>
                                    Buat baru
              </Button>
                            </div>
                        ) : (
                                <div>
                                    <div className={classes.instructions}>{this.getStepContent(activeStep)}</div>
                                    <div className={classes.wrapperButtonAction}>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={this.handleBack}
                                            className={classes.button}
                                        >
                                            Back
                </Button>
                                 
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </Layout2>
           
        );
    }
}

EditDataAlumni.propTypes = {
    classes: PropTypes.object.isRequired,
    createMahasiswa:PropTypes.func.isRequired,
    getAllJurusan: PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired,
    jurusans:PropTypes.object.isRequired,
    notifications: PropTypes.object.isRequired,

};

const mapStateToProps = (state) =>({
    errors:state.errors,
    jurusans:state.jurusans,
    notifications:state.notifications
})

export default compose(
    withStyles(styles),
    connect(mapStateToProps, { createMahasiswa, getAllJurusan})
    )
(EditDataAlumni);
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Layout2 from '../../components/layout/layout_2';
import {
    Grid,
    Card,
    CardContent,
    Button,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    ExpansionPanel,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link';
import {connect} from 'react-redux';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import { getAllFakultas} from '../../actions/fakultasActions';
class DataJurusan extends Component {
    static async getInitialProps(something) {
        const { res, req } = something;
        if (!req.user) {
            res.writeHead(302, {
                Location: '/login'
            })
            res.end()
        }

    }


    componentDidMount(){
        this.props.getAllFakultas();
    }

    render() {
        const {classes,fakultass} = this.props;
        return (
            <Layout2 url={'/data-jurusan'}>
                <div>
                    <Grid container direction="column" spacing={16}>
                        <Grid item xs={12}>
                            <Link href="/data-jurusan/create">
                                <Button variant="contained" color="primary">
                                    TAMBAH DATA
              </Button>
                            </Link>

                        </Grid>
                        <Grid item xs={12}>
                            {fakultass.fakultas.map((f,i)=>{
                                return(
                                    <ExpansionPanel key={f.fakultas}>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography className={classes.heading}>{f.fakultas}</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <List style={{ width: '100%' }}>
                                                {f.jurusan.map((j, i) => {
                                                    return (
                                                        <ListItem button style={{ borderRadius: 15 }}>
                                                            <Typography style={
                                                                {
                                                                    margin: "0px 5px",
                                                                    fontWeight: "bold"
                                                                }
                                                            }>
                                                                {i + 1}.
                                                      </Typography>
                                                            <Typography style={
                                                                {
                                                                    margin: "0px 10px",
                                                                    fontWeight: "bold"
                                                                }
                                                            }>
                                                                Jurusan :
                                                      </Typography>
                                                            <Typography>
                                                                {j.nama}
                                                            </Typography>
                                                            <Typography style={
                                                                {
                                                                    margin: "0px 10px",
                                                                    fontWeight: "bold"
                                                                }
                                                            }>
                                                                Prodi :
                                                      </Typography>
                                                            <Typography>
                                                                {j.prodi}
                                                            </Typography>
                                                            <Typography style={
                                                                {
                                                                    margin: "0px 10px",
                                                                    fontWeight: "bold"
                                                                }
                                                            }>
                                                                Akreditasi :
                                                      </Typography>
                                                            <Typography>
                                                                {j.akreditasi}
                                                            </Typography>
                                                            <ListItemSecondaryAction>
                                                                <IconButton>
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                            </ListItemSecondaryAction>
                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                )
                            })}
                  
                      
                        </Grid>
                    </Grid>
                </div>
            </Layout2>

        )
    }
}

DataJurusan.propTypes={
    classes:PropTypes.object.isRequired

}

const mapStateToProps = (state)=>({
    fakultass:state.fakultass
});

export default compose(withStyles(styles), connect(mapStateToProps, { getAllFakultas}))(DataJurusan);

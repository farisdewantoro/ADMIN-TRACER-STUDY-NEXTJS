import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/home';
import Layout1 from '../components/layout/layout_1';
import CartPerFakultas from '../components/cart/perFakultas';
import {
    Grid,
    Card,
    CardContent,
    ListItem,
    ListItemText,
    List,
    Paper,
    AppBar,
    Toolbar,
    Typography,
    CardHeader,
    Divider
} from '@material-ui/core';
class Index extends React.Component {
   constructor(){
       super();
       this.state={
           fakultas:[
               {name:'Fakultas Teknik Industri',kode:'FTI'},
               {name:'Fakultas Teknik Sipil dan Perencanaan',kode:'FTSP'},
               { name: 'Fakultas Seni Rupa dan Design', kode: 'FSRD' },
           ]
       }
   }

    render() {
        const {fakultas} = this.state;
        return(
            <Layout1>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader
                                title={<Typography variant="h6">
                                   Fakultas Teknik Industri Lulusan Tahun 2013
                                    </Typography>
                                    }
                            />
                            <Divider/>
                            <CardContent>
                                <Grid container direction="row" spacing={16}>
                                    <Grid item md={8}>
                                        <CartPerFakultas />
                                    </Grid>
                                    <Grid item md={4}>
                                        <Paper>
                                            <List component="nav">
                                           {fakultas.map((f,i)=>{
                                            return(
                                             
                                                <ListItem button key={f.kode} divider={i < fakultas.length-1 ? true:false}>
                                                        <ListItemText primary={f.name} />
                                                    </ListItem>
                                              
                                            )
                                                   })}
                                         </List>
                                        </Paper>
                                     
                                    </Grid>
                                </Grid>
                           
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
             
            </Layout1>
        );
    }
}

export default (Index)
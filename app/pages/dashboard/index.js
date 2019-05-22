import React from 'react'
import { connect } from 'react-redux'
import Home from '../../components/home';
import Layout2 from '../../components/layout/layout_2';
import CartPerFakultas from '../../components/cart/perFakultas';
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

let dataFTI =[
    {
        name: 'Teknik Elektro', uv: 16, pv: 10, amt: 26,
    },
    {
        name: 'Teknik Mesin ', uv: 17, pv: 23, amt: 40,
    },
    {
        name: 'Teknik Industri ', uv: 44, pv: 50, amt: 94,
    },
    {
        name: 'Teknik Kimia ', uv: 9, pv: 18, amt: 27,
    },
    {
        name: 'Teknik Informatika', uv: 25, pv: 14, amt: 39,
    },
];

let dataFTSP = [
    {
        name: 'Arsitektur', uv: 12, pv: 12, amt: 24,
    },
    {
        name: 'Teknik Sipil', uv: 11, pv: 24, amt: 35,
    },
    {
        name: 'Teknik Geodesi ', uv: 25, pv: 12, amt: 37,
    },
    {
        name: 'Teknik Lingkungan ', uv: 11, pv: 18, amt: 29,
    },
    {
        name: 'Perencanaan Wilayah dan Kota', uv: 25, pv: 14, amt: 39,
    },
]
let dataFSRD = [
    {
        name: 'Desain Produk', uv: 24, pv: 15, amt: 41,
    },
    {
        name: 'Desain Komunikasi Visual', uv: 16, pv: 12, amt: 28,
    },
    {
        name: 'Desain Interior', uv: 12, pv: 52, amt: 64,
    }
];

let data={
    FTI: dataFTI,
    FTSP: dataFTSP,
    FSRD: dataFSRD
}

class Index extends React.Component {
   constructor(){
       super();
       this.state={
           fakultas:[
               {name:'Fakultas Teknik Industri',kode:'FTI'},
               {name:'Fakultas Teknik Sipil dan Perencanaan',kode:'FTSP'},
               { name: 'Fakultas Seni Rupa dan Design', kode: 'FSRD' },
           ],
           barAktif:"FTI",
           data: data.FTI,
           title:"Fakultas Teknik Industri",
           totalLulusan:{
               uv:0,
               pv:0
           }
        }
    }
    componentDidMount(){

        var totalUV = this.state.data.reduce(function (a, dat) {
            return a + dat.uv;
        }, 0);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.barAktif !== this.state.barAktif){
            this.setState({
                data:data[nextState.barAktif]
            });
            return false;
        }
        return true;
    }
    handlerChangeBarData= (f)=>(e)=>{
            this.setState({
                barAktif:f.kode,
                title:f.name
            });
    }
    render() {
        const { fakultas, data,title} = this.state;
        return(
            <Layout2 url={'/dashboard'}>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <Card>
                        <CardHeader
                                title={<Grid container justify="space-between" alignItems="center">
                                    <div>
                                        <Typography variant="h6">
                                            {title}  Tahun 2013
                                    </Typography>
                                    </div>
                                </Grid>}
                        />
                         <Divider />
                            <CardContent>


                                <Grid container direction="row" spacing={16}>
                                    <Grid item md={8}>
                                        <CartPerFakultas
                                            data={data}
                                        />

                                    </Grid>
                                    <Grid item md={4}>
                                        <Paper>
                                            <List component="nav">
                                           {fakultas.map((f,i)=>{
                                            return(

                                                <ListItem
                                                button
                                                key={f.kode}
                                                divider={i < fakultas.length-1 ? true:false}
                                                onClick={this.handlerChangeBarData(f)}
                                                >
                                                        <ListItemText primary={f.name} />
                                                </ListItem>

                                            )
                                                   })}
                                         </List>
                                        </Paper>

                                        <div style={{ margin: "20px 0"}}>
                                            <Typography >
                                                <span style={{ fontWeight: "bold" }}>Total Wisuda Maret 2013: </span>   {this.state.data.reduce(function (a, dat) {
                                                    return a + dat.pv;
                                                }, 0)}
                                            </Typography>
                                            <Typography >
                                                <span style={{ fontWeight: "bold" }}>Total Wisuda Oktober 2013: </span>  {this.state.data.reduce(function (a, dat) {
                                                    return a + dat.uv;
                                                }, 0)}
                                            </Typography>
                                        </div>


                                    </Grid>
                                </Grid>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Layout2 >
        );
    }
}

export default (Index)

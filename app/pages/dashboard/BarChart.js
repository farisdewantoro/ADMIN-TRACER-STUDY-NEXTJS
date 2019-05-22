import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';



//   {
//     name: '2015', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: '2016', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: '2017', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: '2018', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: '2019', uv: 3490, pv: 4300, amt: 2100,
//   },


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    const {data} = this.props;
    return (
         <div style={{ width: '100%', height: 300 }}>

      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Bar dataKey="pv" fill="color" /> */}
        <Bar dataKey="uv" name="Total" fill="#82ca9d">
            {/* {data.map((d,index)=>{
                return(
                    <Cell key={`cell-${index}`} fill={d.color}/>
                )
            })} */}
        </Bar>
      </BarChart>

    </div>
    );
  }
}

import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis,ResponsiveContainer, CartesianGrid, Tooltip, Legend, LabelList,
} from 'recharts';

// const data = [
//     {
//         name: 'Teknik Elektro', uv: 16, pv: 10, amt: 26,
//     },
//     {
//         name: 'Teknik Mesin ', uv: 17, pv: 23, amt: 40,
//     },
//     {
//         name: 'Teknik Industri ', uv: 44, pv: 50, amt: 94,
//     },
//     {
//         name: 'Teknik Kimia ', uv: 9, pv: 18, amt: 27,
//     },
//     {
//         name: 'Teknik Informatika', uv: 25, pv: 14, amt: 39,
//     },
// ];

const renderCustomizedLabel = (props) => {
    const {
        x, y, width, height, value,color
    } = props;
    const radius = 18;
    console.log(props);
    return (
        <g>
            <circle cx={x + width / 2} cy={y - radius} r={radius} fill={color} />
            <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
               {value}
            </text>
        </g>
    );
};

export default class PerFakultas extends PureComponent {

    render() {
        const {data}=this.props;
        return (
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
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
                    <Bar dataKey="pv" name="Wisuda Maret 2013" fill="#8884d8" minPointSize={5}>
                        <LabelList dataKey="pv" color="#8884d8" content={renderCustomizedLabel} />
                    </Bar>
                    <Bar dataKey="uv" name="Wisuda Oktober 2013" fill="#82ca9d" minPointSize={10}>
                        <LabelList dataKey="uv" color="#82ca9d"  content={renderCustomizedLabel} />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

        );
    }
}

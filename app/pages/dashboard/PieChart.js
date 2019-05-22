import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,Tooltip, PieChart, Pie, Legend,
} from 'recharts';

export default class Example extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

  render() {
    const {data} = this.props;
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="uv" data={data} fill="#8884d8" label />
             <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

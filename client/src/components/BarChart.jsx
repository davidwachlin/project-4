import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

export default class BarChart extends Component {

		static defaultProps = {
			graphFeature: 'energy'
		}
	

	render() {
		const { data } = this.props;
		const { graphFeature } = this.props;

		console.log('from barchart', data);



		return (
			<VictoryChart domainPadding={20} >
				<VictoryAxis
					// tickValues specifies both the number of ticks and where
					// they are placed on the axis
					// tickValues={[1, 2, 3, 4]}
                        tickFormat={x => `${x}`}
				/>
				<VictoryAxis

                    dependentAxis
					// tickFormat specifies how ticks should be displayed
                    tickFormat={x => `${x}`}

				/>

				<VictoryBar style={{ data: { fill: "#56FA71" } }} data={data} x='name' y={graphFeature}  />
			</VictoryChart>
		);
	}
}

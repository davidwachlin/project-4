import React, { Component } from 'react';
import {
	VictoryBar,
	VictoryChart,
	VictoryAxis,
	VictoryContainer,
	VictoryTheme,
	VictoryLabel,
	VictoryTooltip
} from 'victory';

export default class BarChart extends Component {
	getStyles() {
		return {
			axisOne: {
				fill: 'white',
				color: 'white',
				stroke: 'white'
			}
		};
	}
	render() {
		const styles = this.getStyles();
		const { data } = this.props;
		const { graphFeature } = this.props;
		console.log('from barchart graphFeature:', graphFeature);
		console.log('from barchart data:', data);

		return (
			<div>
					<VictoryChart
						domainPadding={20}
						animate={{
							onEnter: { duration: 1000 }
						}}
						containerComponent={
							<VictoryContainer/>
						  }>
						<VictoryAxis
							tickFormat={x => `${x}`}
							style={{
								axis: { stroke: 'white' },
								ticks: { stroke: 'white' },
								tickLabels: { fontSize: 10, fill: 'white' }
							}}
						/>
						<VictoryAxis
							dependentAxis
							label={`${graphFeature}`}
							style={{
								axis: { stroke: 'white' },
								ticks: { stroke: 'white' },
								tickLabels: { fontSize: 11, fill: 'white' },
								axisLabel: { fill: 'white' }
							}}
						/>
						<VictoryBar
							style={{ data: { fill: '#56FA71' } }}
							horizontal
							data={data}
							x='name'
							y={graphFeature}
							labelComponent={<VictoryTooltip/>}

						/>
					</VictoryChart>
				
			</div>
		);
	}
}

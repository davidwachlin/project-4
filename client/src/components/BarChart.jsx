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

import Box from '@material-ui/core/Box'

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
			<Box width='100%'>
					<VictoryChart
						padding={{ left: 100, top: 10, right: 5, bottom: 50 }}
						domainPadding={20}
						animate={{
							onEnter: { duration: 1000 }
						}}
						containerComponent={
							<VictoryContainer/>
						  }>
						<VictoryAxis
							tickFormat={x => {
								return (
								x.length > 18
								? x.substring(0, 19) + '...'
								: `${x}`
								)
							}}
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
				
			</Box>
		);
	}
}

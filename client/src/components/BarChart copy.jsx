import React from 'react';
import * as d3 from 'd3';


class BarChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			widthScale: d3
				.scaleBand()
				.domain(d3.range(0, this.props.data.length))
				.range([0, this.props.width]),

			heightScale: d3
				.scaleLinear()
				.domain([0, d3.max(this.props.data.map(d, d => d.energy)]))
				.range([0, this.props.height])
		};
	}
	color = chroma.scale(['yellow', 'navy']).mode('hsl');

	static getDerivedStateFromProps(nextProps, prevState) {
		let { widthScale, heightScale } = prevState;

		widthScale.domain(d3.range(0, nextProps.data.length));
		heightScale.domain([0, d3.max(nextProps.data)]);

		prevState = { ...prevState, widthScale, heightScale };
		return prevState;
	}

	render() {
        console.log(this.props.data)
        console.log(this.props.data.length)
        const { x, y, height, highlightBar, highlightedBar } = this.props,
			{ widthScale, heightScale } = this.state;

		return (
		  <g
		    transform={`translate(${x}, ${y})`}
		    onMouseOut={() => highlightBar(null)}
		  >
		    {this.props.data.map((d, i) => (
		      console.log(d.energy)
            //   <rect
		    //     x={widthScale(i)}
		    //     y={height - heightScale(d.energy)}
		    //     width={widthScale.bandwidth()}
		    //     height={heightScale(d.energy)}
		    //     style={{
		    //       fill: i === highlightedBar ? this.color(d) : this.color(1 - d)
		    //     }}
		    //     onMouseOver={() => highlightBar(i)}
		    //     key={i}
		    //   />
		    ))}
		  </g>
        )
	}
}

export default BarChart;

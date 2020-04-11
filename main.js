import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LinearAxis from './components/linear-axis';
import Messages from './components/messages';

export default function Main() {

	const spindleAxisConfiguration = {
		digits: 8,
		decimal: 4,
		unitOptions: ['sfm', 'rpm'],
		modeOptions: ['sfm', 'rpm'],
	};

	const [axes, setAxes] = useState([
		{	name: 'X',
			value: 12.123,
			units: 'in',
			mode: 'abs',
			type: 'linear',
		},
		{	name: 'Y',
			value: -32.00356,
			units: 'in',
			mode: 'abs',
			type: 'linear',
		},
		{	name: 'Z',
			value: 0.00,
			units: 'in',
			mode: 'abs',
			type: 'linear',
		},
		{	name: 'W',
			value: 12.123,
			units: 'rpm',
			mode: 'abs',
			type: 'spindle',
		}
	]);

	const findAxisNamed = (axisName) => {
		var index = axes.findIndex(e => e.name === axisName);
		return index;
	}

	const zeroAxis = (axisName) => {
		console.log('zeroAxis(' + axisName + ')');
		var index = axes.findIndex(e => e.name === axisName);
		if (index >= 0) {
			var nAxes = axes.slice();	// copy the array so state reflects the change
			nAxes[index].value = 0.0;
			setAxes(nAxes);
		}
	}

	const setValue = (axisName, newValue) => {
		var index = axes.findIndex(e => e.name === axisName);
		if (index >= 0) {

		}
		var axis = axes.slice(index, index+1)[0];
		axis.value = newValue;

	}

	const setMode = (axisName, mode) => {
	};

	const toggleMode = (axisName) => {
		console.log('toggleMode(' + axisName + ')');
	}
	
	const setUnits = (axisName, units) => {
	};

	const toggleUnits = (axisName) => {
	};

	const renderMeasurement = ({item, index, separators}) => {
		switch (item.type) {
			case 'linear':
				return (
					<LinearAxis key={item.name} 
						name={item.name} value={item.value} units={item.units} mode={item.mode}
						zeroAxis={() => zeroAxis(item.name)} 
						toggleMode={() => toggleMode(item.name)} />
				);
			case 'spindle':
				return (
					<Text style={{color: 'white'}}>Spindle speed.</Text>
				);
		}

		return (
			<Text style={{color: 'white'}}>Unknown Measurement</Text>
		);
	}



	return (
		<View style={styles.container}>
			<View style={styles.cross} >
				<View style={styles.axes}>
					{ axes.map((axis) => {
						if (axis.type == 'linear') {
							return (
								<LinearAxis key={axis.name} 
									name={axis.name} value={axis.value} units={axis.units} mode={axis.mode}
									zeroAxis={() => zeroAxis(axis.name)} 
									toggleMode={() => toggleMode(axis.name)} />
							);	
						} else {
							return (
								<Text style={{color: 'white'}}>Non-linear Axis.</Text>
							);
						}
					})}
				</View>
				<View style={styles.controls}>
					<Text>Controls</Text>
					<Text>Points</Text>
				</View>
			</View>
			<Messages />
		</View>
	  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		// backgroundColor: 'black',
	},
	cross: {
		flex: 4,
		flexDirection: 'row',
	},
	messages: {
		flex: 1,
	},

	axes: {
		flex: 2,
	},
	controls: {
		flex: 1,
	},
  });
  
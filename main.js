import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Axis from './components/axis';
import Messages from './components/messages';

export default function Main() {

	const linearAxisConfiguration = {
		digits: 8,
		decimal: 4,
		unitOptions: ['in', 'mm'],
		modeOptions: ['abs', 'inc'],
	};

	const spindleAxisConfiguration = {
		digits: 8,
		decimal: 4,
		unitOptions: ['sfm', 'rpm'],
		modeOptions: ['sfm', 'rpm'],
	};

	const axisHandlers = {
		setMode: setMode,
		toggleUnits: toggleMode,
		setUnits: setUnits,
		toggleUnits: toggleUnits,
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

	const findAxisName = (axisName) => {

	}

	const zeroAxis = (axisName) => {
		var index = axes.findIndex(e => e.name === axisName);
		if (index >= 0) {
			var nAxes = axes.slice();	// copy the array so state reflects the change
			nAxes[index].value = 0.0;
			setAxes(nAxes);
		}
	}

	const setMode = (axisName, mode) => {
	};

	const toggleMode = (axisName) => {
	}
	
	const setUnits = (axisName, units) => {
	};

	const toggleUnits = (axisName) => {
		var axis = axes.find(e => e.name == axisName);
		if (axis != undefined) {
			if (axis.units === linearAxisConfiguration.unitOptions[0]) {
			}
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.cross} >
				<View style={styles.axes}>
					{ axes.map((axis) => {
						return (
							<Axis name={axis.name} configuration={linearAxisConfiguration} 
								value={axis.value} units={axis.units} mode={axis.mode}
								zeroAxis={zeroAxis} />
						);
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
  
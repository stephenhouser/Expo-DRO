import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import LinearAxis, { linearAxisConfiguration } from './components/linear-axis';
import SpindleSpeed, { spindleSpeedConfiguration } from './components/spindle-speed';
import Messages from './components/messages';

export default function Main() {

	const [configurations, setConfigurations] = useState({
		'X': { ...linearAxisConfiguration },
		'Y': { ...linearAxisConfiguration },
		'Z': { ...linearAxisConfiguration },
		'R': { ...spindleSpeedConfiguration },
	})

	const [measurements, setMeasurements] = useState({
		'X': { value: 0.0, units: 'in', mode: 'abs' },
		'Y': { value: 0.0, units: 'in', mode: 'abs' },
		'Z': { value: 0.0, units: 'in', mode: 'abs' },
		'R': { value: 0.0, units: 'rpm', mode: 'rpm' },
	});

	const zeroAxis = (axisName) => {
		console.log('zeroAxis(' + axisName + ')');

		const axis = measurements[axisName];
		if (axis != undefined) {
			var newState = {...measurements}
			newState[axisName].value = (Math.random() * 100.0) - 33.0;
			setMeasurements(newState);
		}
	}

	const setValue = (axisName, newValue) => {
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
		const measurement = measurements[item];
		const configuration = configurations[item];
		if (measurement != undefined && configuration != undefined) {
			switch (configuration.type) {
				case 'linear':
					return (
						<LinearAxis	name={item}
							value={measurement.value} units={measurement.units} mode={measurement.mode}
							zeroAxis={() => zeroAxis(item)} 
							toggleMode={() => toggleMode(item)} />
					);
				case 'spindle':
					return (
						<SpindleSpeed name={item}
							value={measurement.value} units={measurement.units} mode={measurement.mode}
							zeroSpeed={() => zeroAxis(item)} 
							toggleMode={() => toggleMode(item)} />
					);
			}
		}

		return (
			<Text style={{color: 'white'}}>Unknown Measurement {item}</Text>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.cross} >
				<View style={styles.axes}>
					<FlatList data={Object.keys(measurements)}
						keyExtractor={item => item}
						renderItem={renderMeasurement} />
					{/* <FlatList data={axes} 
						keyExtractor={item => item.name}
						renderItem={renderMeasurement} /> */}
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


					// { axes.map((axis) => {
					// 	if (axis.type == 'linear') {
					// 		return (
					// 			<LinearAxis key={axis.name} 
					// 				name={axis.name} value={axis.value} units={axis.units} mode={axis.mode}
					// 				zeroAxis={() => zeroAxis(axis.name)} 
					// 				toggleMode={() => toggleMode(axis.name)} />
					// 		);	
					// 	} else {
					// 		return (
					// 			<Text style={{color: 'white'}}>Non-linear Axis.</Text>
					// 		);
					// 	}
					// })}


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
  
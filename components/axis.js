import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

// const axisConfiguration = {
// 	digits: 8,
// 	decimal: 4,
// 	unitOptions: ['in', 'mm'],
// 	modeOptions: ['abs', 'inc'],
// };

export default function Axis({ name, value, units, mode, configuration }) {

	const zeroAxis = () => {
		//setDisplayValue(Number(0.0).toFixed(configuration.decimal));
	};

	const toggleUnits = () => {
		configuration.toggleUnits(name);
	}

	const displayTitle = name + '(0)';
	const displayValue = Number(value).toFixed(configuration.decimal);
	const displayUnits = units;
	const displayMode = mode;

	const unitMarker = (unitsDesignator) => {
		if (unitsDesignator === 'in') {
			return '”';
		}

		return unitsDesignator;
	}

	const unitStyle = (baseStyle, highlight) => {
		if (highlight) {
			return StyleSheet.compose(baseStyle, styles.highlightUnit);
		}

		return baseStyle;
	}

	const firstUnit = configuration.unitOptions[0];
	const secondUnit = configuration.unitOptions[1];

	return (
		<View style={styles.container}>
			<View style={styles.prefix}>
				<Button title={displayTitle} onPress={configuration.zeroAxis}/>
			</View>
			<View style={styles.content}>
				<Text style={styles.backgroundText}>8888.888</Text>
		  		<Text style={styles.valueText}>{displayValue}</Text>
			</View>
			<View style={styles.postfix}>
				<View style={styles.unitsContainer}>
					<Text style={ unitStyle(styles.firstUnit, displayUnits === firstUnit) } >{unitMarker(firstUnit)}</Text>
					<Text style={ unitStyle(styles.secondUnit, displayUnits === secondUnit) } >{unitMarker(secondUnit)}</Text>
				</View>
				<Button title='abs/inc' onPress={toggleUnits}/>
			</View>
		</View>
	  );
}

const styles = StyleSheet.create({

	container: {
		flexDirection: 'row',		/* items in this container flow across the row */
		backgroundColor: 'black',	/* same as overall background color */
		borderColor: 'darkgrey',	/* border around the component */
		borderWidth: 1,	
		borderRadius: 5,
		margin: 3,
		padding: 10,
	},

	prefix: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#330000',
	},

	content: {
		flex: 1,
		backgroundColor: 'black',
		position: 'relative',
	},

	backgroundText: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		zIndex: -1,
		fontSize: 64,
		fontFamily: 'DSEG7Classic-BoldItalic',
		color: '#333',
		textAlign: 'right',
	},
	valueText: {
		// position: 'absolute',
		// bottom: 0,
		// right: 0,
		fontSize: 64,
		fontFamily: 'DSEG7Classic-BoldItalic',
		color: 'greenyellow',
		textAlign: 'right',
	},

	postfix: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	unitsContainer: {
		alignSelf: 'stretch',
		justifyContent: 'space-between',
		marginRight: 10,
		marginTop: -10,
	},
	firstUnit: {
		fontSize: 42,
		color: '#333',
	},
	secondUnit: {
		fontSize: 22,
		// includeFontPadding: false,
		color: '#333',
	},
	highlightUnit: {
		color: 'greenyellow',
	}


	// textView: {
	// 	flex: 2,
	// 	fontSize: 64,
	// 	// fontFamily: 'DSEG7Classic-BoldItalic',
	// 	position: 'relative'
	// },
	// backgroundText: {
	// 	position: 'absolute',
	// 	fontSize: 64,
	// 	// fontFamily: 'DSEG7Classic-BoldItalic',
	// 	color: '#222',
	// 	textAlign: 'right',
	// 	justifyContent: 'center',
	// },
	// valueText: {
	// 	position: 'absolute',

	// 	fontSize: 64,
	// 	// fontFamily: 'DSEG7Classic-BoldItalic',
	// 	color: 'greenyellow',
	// 	textAlign: 'right',
	// 	justifyContent: 'center',
	// 	marginRight: 10,
	// 	marginTop: 10,
	// },
	// leftButton: {
	// 	flex: 1,
	// 	justifyContent: 'center',
	// 	margin: 5
	// },
	// rightButton: {
	// 	flex: 1,
	// 	justifyContent: 'center',
	// 	margin: 5
	// }
  });
  
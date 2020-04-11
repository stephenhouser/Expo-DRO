import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export function AxisUnitDisplay( {}) {

}


export default function LinearAxis({ name, value, units, mode, zeroAxis, toggleMode }) {

	const axisConfiguration = {
		digits: 8,						// number of total digits to display.
		decimal: 4,						// number of fixed digits after decimal place
		unitOptions: ['in', 'mm'],		// must be two things here!	hardcoded below.
		modeOptions: ['abs', 'inc'],	// must be two things here! hardcoded below.
	};
	
	const displayTitle = name + '(0)';
	const displayValue = Number(value).toFixed(axisConfiguration.decimal);
	const displayUnits = units;
	const displayMode = mode;
	const displayBackgroundValue = Number('8'.repeat(axisConfiguration.digits-axisConfiguration.decimal) + '.' + '8'.repeat(axisConfiguration.decimal));

	const firstUnit = axisConfiguration.unitOptions[0];
	const secondUnit = axisConfiguration.unitOptions[1];

	const unitMarker = (unitsDesignator) => {
		// Special case for making inches show as double smart quote
		if (unitsDesignator === 'in') {
			return '”';
		}

		return unitsDesignator;
	}

	const unitStyle = (baseStyle, highlight) => {
		if (highlight) {
			return StyleSheet.compose(baseStyle, styles.highlight);
		}

		return baseStyle;
	}

	return (
		<View style={styles.container}>
			<View style={styles.prefix}>
				<Button title={displayTitle} onPress={zeroAxis} />
			</View>
			<View style={styles.content}>
				<Text style={styles.backgroundText}>{displayBackgroundValue}</Text>
				<Text style={styles.valueText}>{displayValue}</Text>
			</View>
			<View style={styles.postfix}>
				<View style={styles.unitsContainer}>
					<Text style={unitStyle(styles.firstUnit, displayUnits === firstUnit)} >{unitMarker(firstUnit)}</Text>
					<Text style={unitStyle(styles.secondUnit, displayUnits === secondUnit)} >{unitMarker(secondUnit)}</Text>
				</View>
				<Button title='abs/inc' onPress={toggleMode} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',		// items in this container flow across the row 
		backgroundColor: 'black',	// same as overall background color 
		borderColor: 'darkgrey',	// border around the component 
		borderWidth: 1,
		borderRadius: 5,
		margin: 3,
		padding: 10,
	},

	// the zeroAxis button
	prefix: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	// the value display
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

	// the units and mode button
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

	// style to use to highlight things
	highlight: {
		color: 'greenyellow',
	}
});

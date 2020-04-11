import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Button, Text } from 'react-native-elements';

export const linearAxisConfiguration = {
	type: 'linear',
	displayDigits: 8,				// number of total digits to display.
	displayDecimalPlaces: 4,		// number of fixed digits after decimal place
	unitOptions: ['in', 'mm'],		// must be two things here!	hardcoded below.
	modeOptions: ['abs', 'inc'],	// must be two things here! hardcoded below.
};

export function ToggleButton({ value, onTitle, offTitle, onValueChange }) {

	const formattedTopTitle = onTitle;
	const formattedBottomTitle = offTitle;


	const highlightStyle = (baseStyle, highlight) => {
		if (highlight) {
			return StyleSheet.compose(baseStyle, bStyles.highlight);
		}

		return baseStyle;
	}

	return (
		<TouchableHighlight onPress={onValueChange}>
			<View style={bStyles.container}>
				<Text style={highlightStyle(bStyles.label, value)}>
					{formattedBottomTitle}
				</Text>
				<View style={{backgroundColor: '#333', height: 2, width: 25}}></View>
				<Text style={highlightStyle(bStyles.label, !value)}>
					{formattedTopTitle}
				</Text>
			</View>
		</TouchableHighlight>
	);
}

const bStyles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		backgroundColor: 'black',	// same as overall background color 
		borderColor: 'white',		// border around the component 
		borderWidth: 1,
		borderRadius: 5,
		paddingTop: 5,
		paddingBottom: 5,
		paddingStart: 10,
		paddingEnd: 10,
		alignItems: 'center',
	},

	label: {
		fontSize: 20,
		color: '#333',
		padding: 2,
	},

	// style to use to highlight things
	highlight: {
		color: 'greenyellow',
	}
});

export default function LinearAxis({ name,
	value, units, mode, 					// most changeable things...
	zeroAxis, toggleMode, toggleUnits,		// button handlers
	displayDigits, displayDecimalPlaces, 	// digit display options
}) {

	const showDigits = displayDigits || linearAxisConfiguration.displayDigits;
	const showDecimalPlaces = displayDecimalPlaces || linearAxisConfiguration.displayDecimalPlaces;

	const displayTitle = name + '(0)';
	const displayValue = Number(value).toFixed(showDecimalPlaces);
	const displayUnits = units || linearAxisConfiguration.unitOptions[0];
	const displayMode = mode || linearAxisConfiguration.modeOptions[0];
	const displayBackgroundValue = Number('8'.repeat(showDigits - showDecimalPlaces) + '.' + '8'.repeat(showDecimalPlaces));

	const topUnit = linearAxisConfiguration.unitOptions[0];
	const bottomUnit = linearAxisConfiguration.unitOptions[1];

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
					<Text style={unitStyle(styles.topUnit, displayUnits === topUnit)} >
						{unitMarker(topUnit)}</Text>
					<Text style={unitStyle(styles.bottomUnit, displayUnits === bottomUnit)} >
						{unitMarker(bottomUnit)}</Text>
				</View>
				<ToggleButton onTitle='inc' offTitle='abs' value={mode === 'inc'} onValueChange={toggleMode} />
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
	topUnit: {
		fontSize: 42,
		color: '#333',
	},
	bottomUnit: {
		fontSize: 22,
		// includeFontPadding: false,
		color: '#333',
	},

	// style to use to highlight things
	highlight: {
		color: 'greenyellow',
	}
});

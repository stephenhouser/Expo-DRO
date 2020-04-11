import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

export default function ToggleButton({ value, onTitle, offTitle, onValueChange }) {

	const formattedTopTitle = onTitle;
	const formattedBottomTitle = offTitle;

	const highlightStyle = (baseStyle, highlight) => {
		if (highlight) {
			return StyleSheet.compose(baseStyle, styles.highlight);
		}

		return baseStyle;
	}

	return (
		<TouchableHighlight onPress={onValueChange}>
			<View style={styles.container}>
				<Text style={highlightStyle(styles.label, value)}>
					{formattedTopTitle}
				</Text>
				<View style={{backgroundColor: '#333', height: 2, width: 25}}></View>
				<Text style={highlightStyle(styles.label, !value)}>
					{formattedBottomTitle}
				</Text>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
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
		fontWeight: 'bold'
	},

	// style to use to highlight things
	highlight: {
		color: 'greenyellow',
	}
});

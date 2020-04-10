import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Axis from './components/axis';

import Messages from './components/messages';

export default function Main() {
	return (
		<View style={styles.container}>
			<View style={styles.cross} >
				<View style={styles.axes}>
					<Axis />
					<Axis />
					<Axis />
					<Axis />
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
  
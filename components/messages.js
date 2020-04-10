import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Messages() {
	return (
		<View style={styles.container}>
			<Text>Messages go here...</Text>
		</View>
	  );
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'pink',
	},
  });
  
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import Main from './main';
import DROHeader from './components/header';

import Axis from './components/axis';

const Stack = createStackNavigator();

const DROTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
	},
};

export default function App() {
	let [fontsLoaded] = useFonts({
		'DSEG7Classic-BoldItalic': require('./assets/fonts-DSEG_v045/DSEG7-Classic/DSEG7Classic-BoldItalic.ttf'),
		'DSEG7Modern-Italic': require('./assets/fonts-DSEG_v045/DSEG7-Modern/DSEG7Modern-Italic.ttf'),
		'DSEG7Modern-BoldItalic': require('./assets/fonts-DSEG_v045/DSEG7-Modern/DSEG7Modern-BoldItalic.ttf')
	});

	const setMode = (axisName, mode) => {
		if (axisName == 'X') {
			setXAxis({...xAxis,	mode: mode});
		}
	};

	const setUnits = (axisName, units) => {
		if (axisName == 'X') {
			setXAxis({...xAxis,	units: units});
		}
	};

	const toggleUnits = (axisName) => {
		console.log('toggleUnits');
		switch (axisName) {
			case 'X':

		}
		if (axisName == 'X') {
			if (xAxis.units === axisConfiguration.unitOptions[0]) {
				setXAxis({...xAxis,	units: axisConfiguration.unitOptions[1]});
			} else {
				setXAxis({...xAxis,	units: axisConfiguration.unitOptions[0]});
			}
		}
	};

	const linearAxisOptions = {
		digits: 8,
		decimal: 4,
		unitOptions: ['in', 'mm'],
		modeOptions: ['abs', 'inc'],
	};

	const spindleAxisOptions = {
		digits: 8,
		decimal: 4,
		unitOptions: ['sfm', 'rpm'],
		modeOptions: ['sfm', 'rpm'],
	};

	const axisHandler = {
		setMode: setMode,
		setUnits: setUnits,
		toggleUnits: toggleUnits,
	};

	const [axes, setAxes] = useState({
		x: {
			value: 12.123,
			units: 'in',
			mode: 'abs',
			configuration: linearAxisConfiguration,	
		},
		y: {
			value: -32.00356,
			units: 'in',
			mode: 'abs',
			configuration: linearAxisConfiguration,	
		},
		z: {
			value: 0.00,
			units: 'in',
			mode: 'abs',
			configuration: linearAxisConfiguration,	
		},
		w: {
			value: 12.123,
			units: 'rpm',
			mode: 'abs',
			configuration: spindleAxisOptions,
		}
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				<Axis name='X' configuration={axisConfiguration} value={xAxis.value} units={xAxis.units} mode={xAxis.mode} />
				<Axis name='Y' configuration={axisConfiguration} value='-2.3005' units='in' mode='abs' />
			</View>
			// <NavigationContainer theme={DROTheme}>
			//   <Stack.Navigator
			//     style={styles.app}
			//     screenOptions={{
			//       header: () => (
			//         <DROHeader />
			//       )
			//     }}
			//   >
			//     <Stack.Screen name="ExpoDRO" component={Main} />
			//   </Stack.Navigator>
			// </NavigationContainer>    
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
	},
});

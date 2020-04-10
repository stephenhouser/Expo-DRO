import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import Main from './main';
import DROHeader from './components/header';

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

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<NavigationContainer theme={DROTheme}>
				<Stack.Navigator
					style={styles.app}
					screenOptions={{
						header: () => (
							<DROHeader />
						)
					}}
				>
					<Stack.Screen name="ExpoDRO" component={Main} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
	},
});

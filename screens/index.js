import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';

const Stack = createNativeStackNavigator();

const Screens = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Login' component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Screens;


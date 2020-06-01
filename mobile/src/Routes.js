import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import Login from './views/Login';
import Join from './views/Join';


const Routes = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Login"
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
                name="Join"
                component={Join}
                options={{ headerShown: true, headerTitle: false }} />
        </Stack.Navigator>
    );
}

export default Routes

/*
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './views/Login';

const Routes = createAppContainer(
    createStackNavigator({
        Login,
    })
);

export default Routes
*/
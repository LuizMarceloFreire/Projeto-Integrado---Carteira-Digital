import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, HeaderStyleInterpolators, useIsFocused } from '@react-navigation/stack';
import Login from './views/Login';
import Join from './views/Join';
import Dashboard from './views/Dashboard';
import CreateNewDocument from './views/CreateNewDocument';
import ShowDocument from './views/ShowDocument';

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
                options={{ headerShown: true, headerTitle: false }}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ headerTitle: false }}
            />
            <Stack.Screen
                name="ShowDocument"
                component={ShowDocument}
                options={{
                    headerTitle: false,
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: '#FFF',
                }}
            />
            <Stack.Screen
                name="CreateNewDocument"
                component={CreateNewDocument}
                options={{ headerTitle: false }}

            />
        </Stack.Navigator>
    );
}

export default Routes
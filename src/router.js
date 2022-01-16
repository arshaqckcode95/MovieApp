import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home'

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
               <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
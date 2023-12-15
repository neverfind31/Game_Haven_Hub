import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from '../screens/Splash'


const SplashStack = createNativeStackNavigator()

export default SplashScreen = () => {
    return (
        <SplashStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <SplashStack.Screen
                name="Splash"
                component={Splash}
            />
        </SplashStack.Navigator>
    )
}
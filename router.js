import React from "react";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";

const AuthStack = createStackNavigator();

const useRoute = (isAuth) => {
    return (
        <>
            <AuthStack.Navigator initialRouteName="Login">
                <AuthStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
                <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <AuthStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </AuthStack.Navigator>
        </>
    );
};

export default useRoute;

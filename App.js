import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Background from "./assets/img/background.jpeg";
import PostScreen from "./Screens/PostsScreen";

export default function App() {
    return (
        <>
            {/* <RegistrationScreen /> */}
            <LoginScreen />
            {/* <PostScreen /> */}
        </>
    );
}

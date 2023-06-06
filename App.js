import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useRoute from "./router";

export default function App() {
    const routing = useRoute(true);
    return (
        <>
            <NavigationContainer>{routing}</NavigationContainer>
        </>
    );
}

//auth

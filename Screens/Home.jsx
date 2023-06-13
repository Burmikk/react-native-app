import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostScreen from "./mainScreen/PostsScreen";
import CreatePostsScreen from "./mainScreen/CreatePostsScreen";
import ProfileScreen from "./mainScreen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const MainTab = createBottomTabNavigator();

const Home = () => {
    return (
        <>
            <MainTab.Navigator initialRouteName="Posts" screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
                <MainTab.Screen
                    name="Posts"
                    component={PostScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <View>
                                <Ionicons name="grid-outline" size={size} color={color} />
                            </View>
                        ),
                    }}
                />
                <MainTab.Screen
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <View style={styles.tab}>
                                <AntDesign name="plus" size={size} color={"#fff"} />
                            </View>
                        ),
                    }}
                    name="CreatePost"
                    component={CreatePostsScreen}
                />
                <MainTab.Screen
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <View>
                                <Feather name="user" size={size} color={color} />
                            </View>
                        ),
                    }}
                    name="Profile"
                    component={ProfileScreen}
                />
            </MainTab.Navigator>
        </>
    );
};

export default Home;

const styles = StyleSheet.create({
    tab: {
        width: 70,
        height: 40,
        backgroundColor: "#FF6C00",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});

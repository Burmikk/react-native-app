import { Text, View, StyleSheet } from "react-native";

const ProfileScreen = () => {
    return (
        <>
            <View style={style.container}>
                <Text>Profile Screen</Text>
            </View>
        </>
    );
};
export default ProfileScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

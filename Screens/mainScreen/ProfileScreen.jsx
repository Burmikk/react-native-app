import { Text, View, StyleSheet } from "react-native";
const ProfileScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>Profile screen</Text>
            </View>
        </>
    );
};
export default ProfileScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
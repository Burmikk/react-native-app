import { Text, View, StyleSheet } from "react-native";
const CreatePostsScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>Create Post</Text>
            </View>
        </>
    );
};
export default CreatePostsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
const PostScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.navigation}>
                    <View style={styles.wrapper}>
                        <Text style={styles.navgationText}>Публікації</Text>
                        <View style={styles.icon}>
                            <Feather name="log-out" size={24} color="#BDBDBD" />
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};
export default PostScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navigation: {
        height: 88,
        // alignItems: "center",
        paddingTop: 44,
        borderBottomWidth: 1,
        borderBottomColor: "#BDBDBD",
    },
    wrapper: {
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    navgationText: {
        flex: 1,
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: 17,
        lineHeight: 22,
        fontWeight: 500,
        color: "#212121",
        // marginLeft: "auto",
    },
    icon: {
        justifyContent: "flex-end",
        marginLeft: "auto",
    },
});

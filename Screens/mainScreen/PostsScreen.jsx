import { Text, View, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import user from "../../assets/img/user.png";
import Post from "../../Components/Post/Post";
import { useNavigation, useRoute } from "@react-navigation/native";

const PostScreen = () => {
    const { params } = useRoute();
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <View style={styles.navigation}>
                    <View style={styles.nav_wrapper}>
                        <Text style={styles.navgationText}>Публікації</Text>
                        <View style={styles.icon}>
                            <Feather name="log-out" size={24} color="#BDBDBD" onPress={() => navigation.navigate("Login")} />
                        </View>
                    </View>
                </View>
                <View style={styles.posts_wrapper}>
                    <View style={styles.user_wrapper}>
                        <Image source={user}></Image>
                        <View style={styles.user_info}>
                            <Text>Natali Romanova</Text>
                            <Text>email@example.com</Text>
                        </View>
                    </View>
                    <View>
                        <Post data={params} />
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
        backgroundColor: "#fff",
    },
    navigation: {
        height: 88,
        paddingTop: 44,
        borderBottomWidth: 1,
        borderBottomColor: "#BDBDBD",
    },
    nav_wrapper: {
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
    },
    icon: {
        justifyContent: "flex-end",
        marginLeft: "auto",
    },
    posts_wrapper: {
        paddingHorizontal: 16,
    },
    user_wrapper: {
        flexDirection: "row",
        paddingTop: 32,
    },
    user_info: {
        justifyContent: "center",
        paddingLeft: 8,
    },
});

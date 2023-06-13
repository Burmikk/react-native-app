import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import wood from "../../assets/img/wood.png";

const CommentsScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <View style={styles.navigation}>
                    <View style={styles.nav_wrapper}>
                        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("Posts")}>
                            <Ionicons name="arrow-back" size={24} color="#BDBDBD" />
                        </TouchableOpacity>
                        <Text style={styles.navgationText}>Коментарі</Text>
                    </View>
                </View>
                <View style={styles.comments_wrapper}>
                    <Image style={styles.img} source={wood} />
                    <View style={styles.input_wrapper}>
                        <TextInput
                            style={styles.input}
                            // value=""
                            placeholder="Коментувати..."
                            placeholderTextColor="#BDBDBD"
                            // inputMode={inputMode}
                            // onFocus={handleFocus}
                            // onBlur={handleBlur}
                            // onChangeText={setValue}
                            // secureTextEntry={secureTextEntry}
                        />
                        <View style={styles.icon_wrapper}>
                            <Ionicons name="ios-arrow-up" size={24} color="white" />
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};
export default CommentsScreen;
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
        marginBottom: 32,
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
    comments_wrapper: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: "space-between",
    },
    img: {
        width: "100%",
        borderRadius: 8,
    },
    input_wrapper: {
        position: "relative",
        marginBottom: 16,
    },
    input: {
        height: 50,
        backgroundColor: "#F6F6F6",
        borderRadius: 100,
        paddingLeft: 16,
        borderWidth: 1,
        borderColor: "#E8E8E8",
    },

    icon_wrapper: {
        width: 34,
        height: 34,
        backgroundColor: "#FF6C00",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 17,
        marginTop: 8,
        left: "100%",
        marginLeft: -42,
    },
});

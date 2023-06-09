import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { View, Image, Text, StyleSheet } from "react-native";
import wood from "../../assets/img/wood.png";
const Post = () => {
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.img} source={wood} />
                <Text style={styles.text}>Ліс</Text>
                <View style={styles.post_info}>
                    <View style={styles.comments}>
                        <Feather style={styles.comment_icon} name="message-circle" size={24} color="#BDBDBD" />
                        <Text style={styles.comment_text}>0</Text>
                    </View>
                    <View style={styles.location}>
                        <Ionicons style={styles.location_icon} name="ios-location-outline" size={22} color="#BDBDBD" />
                        <Text style={styles.location_text}>Ivano-Frankivs'k Region, Ukraine</Text>
                    </View>
                </View>
            </View>
        </>
    );
};
export default Post;

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
    },
    img: {
        width: "100%",
        borderRadius: 8,
    },
    text: {
        marginTop: 8,
    },

    post_info: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 8,
    },
    comments: {
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
    },
    comment_icon: {
        transform: [{ scaleX: -1 }],
    },
    comment_text: {
        color: "#BDBDBD",
    },
    location: {
        flexDirection: "row",
        alignItems: "center",
    },

    location_text: {
        textDecorationLine: "underline",
    },
    location_icon: {
        width: 24,
        height: 24,
    },
});

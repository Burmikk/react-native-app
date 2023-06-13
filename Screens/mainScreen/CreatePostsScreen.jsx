import { Text, View, StyleSheet, TextInput, Image, TouchableWithoutFeedback, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Button from "../../Components/Button/Button";
import { useState, useEffect } from "react";

const CreatePostsScreen = () => {
    const navigation = useNavigation();
    const { params } = useRoute();
    const [photo, setPhoto] = useState(params);
    const [post, setPost] = useState([]);
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");

    useEffect(() => {
        setPhoto(params);
    }, [params]);

    const openCamera = () => {
        navigation.navigate("Camera");
    };

    const reset = () => {
        setPhoto("");
        setName("");
        setPlace("");
    };

    const handleSubmit = () => {
        if (photo && place && name) {
            setPost((prevState) => [...prevState, { photo, name, place }]);
            reset();

            navigation.navigate("Posts", { photo });
        } else Alert.alert("Завантажте фото та заповніть поля");
    };
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={styles.navigation}>
                    <View style={styles.nav_wrapper}>
                        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("Posts")}>
                            <Ionicons name="arrow-back" size={24} color="#BDBDBD" />
                        </TouchableOpacity>
                        <Text style={styles.navgationText}>Публікації</Text>
                    </View>
                </View>

                <View style={styles.post_wrapper}>
                    <View style={styles.photo_wrapper}>
                        {photo && <Image style={styles.img} source={{ uri: photo.uri }} />}
                        <TouchableOpacity style={[styles.icon_wrapper, { backgroundColor: photo ? "rgba(255, 255, 255,0.3)" : "rgb(255, 255, 255)" }]} onPress={openCamera}>
                            <Ionicons style={styles.photo_icon} name="camera" size={24} color="#BDBDBD" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.photo_text}>{photo ? "Редагувати фото" : "Завантажте фото"}</Text>

                    <View style={styles.post_info}>
                        <View style={styles.post_form}>
                            <TextInput onChangeText={setName} inputMode="text" value={name} style={styles.input} placeholder="Назва..." placeholderTextColor="#BDBDBD" />
                            <View style={styles.location_wrapper}>
                                <TextInput
                                    inputMode="text"
                                    value={place}
                                    style={[styles.input, { paddingLeft: 28 }]}
                                    placeholder="Місцевість..."
                                    placeholderTextColor="#BDBDBD"
                                    onChangeText={setPlace}
                                />
                                <Ionicons style={styles.location_icon} name="ios-location-outline" size={22} color="#BDBDBD" />
                            </View>

                            <Button bgColor={photo && place && name ? "#FF6C00" : "#F6F6F6"} onPress={handleSubmit} text="Опублікувати" />
                        </View>
                        <TouchableOpacity onPress={reset} style={styles.trash_container}>
                            <AntDesign name="delete" size={24} color="#BDBDBD" />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};
export default CreatePostsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    keyboard: {
        flex: 1,
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
    post_wrapper: {
        flex: 1,
        paddingHorizontal: 16,
    },
    photo_wrapper: {
        width: "100%",
        height: 240,
        position: "relative",
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 32,
        overflow: "hidden",
    },
    img: {
        width: "100%",
        height: "100%",
    },
    icon_wrapper: {
        width: 60,
        height: 60,
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: -30,
        marginTop: -30,
        marginBottom: 88,

        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    post_info: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },

    photo_text: {
        color: "#BDBDBD",
        marginTop: 8,
    },
    input: {
        height: 50,
        marginTop: 32,
        borderBottomWidth: 1,
        borderBottomColor: "#E8E8E8",
    },
    location_wrapper: { position: "relative" },
    location_icon: {
        position: "absolute",
        top: 45,
        left: 0,
    },
    trash_container: {
        width: 70,
        height: 40,
        backgroundColor: "#F6F6F6",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 22,
    },
});

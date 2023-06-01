import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    useWindowDimensions,
    Keyboard,
    TouchableWithoutFeedback,
    Platform,
    KeyboardAvoidingView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Background from "../assets/img/background.jpeg";
import InputField from "../Components/InputField/InputField";
import React, { useState } from "react";
import Button from "../Components/Button/Button";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const { height } = useWindowDimensions();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const onLogin = () => {
        console.log({ name, password });
        setName("");
        setPassword("");
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const navigation = useNavigation();
    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <ImageBackground style={(styles.backgroundImage, { height })} source={Background}>
                        <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                            <View style={styles.registraion_wrapper}>
                                <View style={styles.registraion_box}>
                                    <Text style={styles.text}>Увійти</Text>

                                    <View style={styles.form}>
                                        <InputField placeholder="Адреса електронної пошти" inputMode="email" setValue={setName} value={name} />
                                        <View>
                                            <InputField placeholder="Пароль" inputMode="text" secureTextEntry={!showPassword} value={password} setValue={setPassword} />
                                            {password && (
                                                <TouchableOpacity style={styles.show_password} onPress={togglePasswordVisibility}>
                                                    <Text>{!showPassword ? "Показати" : "Скрити"}</Text>
                                                </TouchableOpacity>
                                            )}
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                        <View style={styles.box}>
                            <Button text="Увійти" onPress={onLogin} />
                            <Text style={styles.signin_text}>
                                Немає акаунту?
                                <Text style={[styles.signin_text, styles.signin_link]} onPress={() => navigation.navigate("Registration")}>
                                    Зареєструватися
                                </Text>
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "flex-end",
    },
    keyboard: {
        flex: 1,
    },
    backgroundImage: {
        // flex: 1,
        resizeMode: "cover",
    },
    registraion_wrapper: {
        flex: 1,
        justifyContent: "flex-end",
    },
    profile_photo: {
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
        position: "absolute",
        top: 0,
        left: "50%",
        marginLeft: -60,
        marginTop: -60,
    },
    icon: {
        position: "absolute",
        top: "65%",
        left: "90%",
    },
    registraion_box: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: "#fff",
        justifyContent: "flex-end",
    },
    text: {
        marginTop: 32,
        marginBottom: 33,
        fontFamily: "Roboto",
        fontSize: 30,
        lineHeight: 35,
        letterSpacing: 0.01,
        textAlign: "center",
        color: "#212121",
    },
    form: {
        paddingLeft: 16,
        paddingRight: 16,
    },

    marginBottom: {
        marginBottom: 43,
    },
    box: {
        backgroundColor: "#fff",
        alignItems: "center",
    },
    show_password: {
        position: "absolute",
        // top: "25%",
        left: "75%",
        paddingBottom: 16,
        paddingTop: 16,
        // paddingLeft: 255,
    },
    btn: {
        width: 343,
        borderRadius: 100,
        backgroundColor: "#FF6C00",
        textAlign: "center",
        paddingTop: 16,
        paddingBottom: 16,
        color: "#FFFFFF",
        marginBottom: 16,
    },
    signin_text: {
        marginBottom: 111,
        color: "#1B4371",
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: 19,
    },
    signin_link: { textDecorationLine: "underline" },
});
export default LoginScreen;

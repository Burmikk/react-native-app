import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    useWindowDimensions,
    Keyboard,
    TouchableWithoutFeedback,
    Platform,
    KeyboardAvoidingView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Background from "../../assets/img/background.jpeg";
import InputField from "../../Components/InputField/InputField";
import Button from "../../Components/Button/Button";
import AddImage from "../../Components/AddImage/AddImage";

const RegistrationScreen = () => {
    const { height } = useWindowDimensions();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();

    const onRegister = () => {
        if (name && password) {
            console.log({ name, email, password });
        }
        setName("");
        setEmail("");
        setPassword("");
        navigation.navigate("Home");
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <ImageBackground style={(styles.backgroundImage, { height })} source={Background}>
                        <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                            <View style={styles.registraion_wrapper}>
                                <View style={styles.registraion_box}>
                                    <AddImage />

                                    <Text style={styles.text}>Реєстрація</Text>

                                    <View style={styles.form}>
                                        <InputField placeholder="Логін" inputMode="text" value={name} setValue={setName} />
                                        <InputField placeholder="Адреса електронної пошти" inputMode="email" value={email} setValue={setEmail} />
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
                            <Button text="Зареєстуватися" onPress={onRegister} />
                            <Text style={styles.login_text}>
                                Вже є акаунт? <Text onPress={() => navigation.navigate("Login")}>Увійти</Text>
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

    registraion_box: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: "#ffffff",
        justifyContent: "flex-end",
    },
    text: {
        marginTop: 92,
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

    show_password: {
        position: "absolute",
        left: "75%",
        paddingBottom: 16,
        paddingTop: 16,
    },
    box: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "flex-end",
    },

    login_text: {
        marginBottom: 45,
        color: "#1B4371",
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: 19,
    },
});
export default RegistrationScreen;

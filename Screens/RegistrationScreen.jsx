import { Text, View, StyleSheet, ImageBackground, useWindowDimensions, Pressable, Platform, TextInput, KeyboardAvoidingView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Background from "../assets/img/background.jpeg";
import InputField from "../Components/InputField/InputField";

const RegistrationScreen = () => {
    const { height } = useWindowDimensions();

    return (
        <>
            <View style={styles.container}>
                <ImageBackground style={(styles.backgroundImage, { height })} source={Background}>
                    <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <View style={styles.registraion_wrapper}>
                            <View style={styles.registraion_box}>
                                <View style={styles.profile_photo}>
                                    <View style={styles.icon}>
                                        <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                                    </View>
                                </View>

                                <Text style={styles.text}>Реєстрація</Text>

                                <View style={styles.form}>
                                    {/* <TextInput
                                        style={[styles.input, isFocused && styles.inputFocused]}
                                        placeholder="Логін"
                                        placeholderTextColor="#BDBDBD"
                                        inputMode="text"
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                    <TextInput style={styles.input} placeholder="Адреса електронної пошти" placeholderTextColor="#BDBDBD" inputMode="email" />
                                    <TextInput
                                        style={[styles.input, styles.marginBottom]}
                                        placeholder="Пароль"
                                        placeholderTextColor="#BDBDBD"
                                        inputMode="text"
                                        secureTextEntry={true}
                                    /> */}
                                    <InputField placeholder="Логін" inputMode="text" />
                                    <InputField placeholder="Адреса електронної пошти" inputMode="email" />
                                    <InputField placeholder="Пароль" inputMode="text" secureTextEntry={true} />
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>

                    <View style={styles.box}>
                        <Pressable>
                            <Text style={styles.btn}>Зареєстуватися</Text>
                        </Pressable>
                        <Text style={styles.login_text}>Вже є акаунт? Увійти</Text>
                    </View>
                </ImageBackground>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    marginBottom: {
        marginBottom: 43,
    },
    box: {
        backgroundColor: "#fff",
        alignItems: "center",
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
    login_text: {
        marginBottom: 45,
        color: "#1B4371",
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: 19,
    },
});
export default RegistrationScreen;

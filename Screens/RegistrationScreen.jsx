import { Text, View, StyleSheet, ImageBackground, Platform, TextInput, Button, KeyboardAvoidingView } from "react-native";
import Background from "../assets/img/background.jpeg";
const RegistrationScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={Background}>
                    <View style={styles.registraion_wrapper}>
                        <View style={styles.registraion_box}>
                            <Text style={styles.text}>Реєстрація</Text>

                            <View style={styles.form}>
                                <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                                    <TextInput style={styles.input} placeholder="Логін" placeholderTextColor="#BDBDBD" inputMode="text" />
                                    <TextInput style={styles.input} placeholder="Адреса електронної пошти" placeholderTextColor="#BDBDBD" inputMode="email" />
                                    <TextInput
                                        style={[styles.input, styles.marginBottom]}
                                        placeholder="Пароль"
                                        placeholderTextColor="#BDBDBD"
                                        inputMode="text"
                                        secureTextEntry={true}
                                    />
                                </KeyboardAvoidingView>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#fff",
    },
    keyboard: {
        // flex: 1,
        // justifyContent: "flex-end",
        // alignItems: "center",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    registraion_wrapper: {
        flex: 1,
        justifyContent: "flex-end",
    },
    registraion_box: {
        height: 549,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: "#fff",
        // justifyContent: "flex-end",
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
    input: {
        height: 50,
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        paddingLeft: 16,
        marginBottom: 16,
    },
    marginBottom: {
        marginBottom: 43,
    },
    btn: { borderRadius: 100 },
});
export default RegistrationScreen;

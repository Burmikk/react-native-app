import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({ text, bgColor = "#FF6C00", onPress }) => {
    return (
        <>
            <Pressable>
                <Text style={[styles.btn, { backgroundColor: bgColor, color: bgColor === "#FF6C00" ? "#fff" : "#BDBDBD" }]} onPress={onPress}>
                    {text}
                </Text>
            </Pressable>
        </>
    );
};
export default Button;

const styles = StyleSheet.create({
    btn: {
        width: 343,
        borderRadius: 100,
        textAlign: "center",
        paddingTop: 16,

        paddingBottom: 16,
        color: "#FFFFFF",
        marginBottom: 16,

        marginTop: 43,
    },
});

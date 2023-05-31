import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({ text, onPress }) => {
    return (
        <>
            <Pressable>
                <Text style={styles.btn} onPress={onPress}>
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
        backgroundColor: "#FF6C00",
        textAlign: "center",
        paddingTop: 16,
        paddingBottom: 16,
        color: "#FFFFFF",
        marginBottom: 16,
    },
});

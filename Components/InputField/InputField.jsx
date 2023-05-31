import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const InputField = ({ placeholder, inputMode, secureTextEntry = false }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <>
            <TextInput
                style={[styles.input, isFocused && styles.inputFocused]}
                placeholder={placeholder}
                placeholderTextColor="#BDBDBD"
                inputMode={inputMode}
                onFocus={handleFocus}
                onBlur={handleBlur}
                secureTextEntry={secureTextEntry}
            />
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        paddingLeft: 16,
        marginBottom: 16,
    },
    inputFocused: {
        borderColor: "#FF6C00",
        borderWidth: 1,
    },
});

export default InputField;

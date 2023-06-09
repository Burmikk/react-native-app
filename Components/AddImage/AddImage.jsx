import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const AddImage = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <>
            <View style={styles.profile_photo}>
                {image && <Image style={styles.img} source={{ uri: image }} />}
                <View style={styles.icon}>
                    <AntDesign name="pluscircleo" size={25} color="#FF6C00" onPress={pickImage} />
                </View>
            </View>
        </>
    );
};
export default AddImage;
const styles = StyleSheet.create({
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
    img: {
        width: "100%",
        height: "100%",
        borderRadius: 16,
    },
});

import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect } from "react";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useNavigation, useRoute } from "@react-navigation/native";

const CameraScreen = () => {
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [photo, setPhoto] = useState();

    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();
        })();
    }, []);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }
        })();
    }, []);

    const makePhoto = async () => {
        if (cameraRef) {
            const { uri } = await cameraRef.takePictureAsync();
            await MediaLibrary.createAssetAsync(uri);

            let location = await Location.getCurrentPositionAsync({});

            const latitude = location.coords.latitude;
            const longitude = location.coords.longitude;

            setPhoto(uri);
            navigation.navigate("CreatePost", { uri, longitude, latitude });
        }
    };

    return (
        <>
            <View style={styles.container}>
                <Camera style={styles.camera} type={type} ref={setCameraRef}>
                    <View style={styles.photoView}>
                        <TouchableOpacity
                            style={styles.flipContainer}
                            onPress={() => {
                                navigation.navigate("CreatePost", { photo });

                                // setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
                            }}
                        >
                            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}> Flip </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={makePhoto}>
                            <View style={styles.takePhotoOut}>
                                <View style={styles.takePhotoInner}></View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        </>
    );
};
export default CameraScreen;

const styles = StyleSheet.create({
    container: { flex: 1 },
    camera: { marginTop: 130, height: "70%" },
    photoView: {
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "flex-end",
    },

    flipContainer: {
        flex: 0.1,
        alignSelf: "flex-end",
    },

    button: { alignSelf: "center" },

    takePhotoOut: {
        borderWidth: 2,
        borderColor: "white",
        height: 50,
        width: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },

    takePhotoInner: {
        borderWidth: 2,
        borderColor: "white",
        height: 40,
        width: 40,
        backgroundColor: "white",
        borderRadius: 50,
    },
});

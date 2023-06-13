import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";

const MapScreen = () => {
    const { params } = useRoute();
    const latitudeValue = params?.latitude ? params.latitude : 50.463807;
    const longitudeValue = params?.longitude ? params.longitude : 30.463999;
    return (
        <>
            <View style={styles.container}>
                <MapView
                    initialRegion={{
                        latitude: latitudeValue,
                        longitude: longitudeValue,
                        latitudeDelta: 0.001,
                        longitudeDelta: 0.006,
                    }}
                    style={styles.map}
                >
                    <Marker coordinate={{ latitude: latitudeValue, longitude: longitudeValue }} />
                </MapView>
            </View>
        </>
    );
};
export default MapScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: "100%",
        height: "100%",
    },
});

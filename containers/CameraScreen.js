import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { FontAwesome5 } from "@expo/vector-icons";
import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Header } from "native-base";

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // const [light, setlight] = useState(false);
  // const [sound, setSound] = useState(false);
  const [results, setResults] = useState([]);
  const [searchBarcode, setSearchBarcode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // navigation.navigate(product) (data)

    navigation.navigate("Product", { itemId: data });
    navigation.navigate("Home", { itemId: data });
  };

  if (hasPermission === null) {
    return <Text>Demande d'accès à votre caméra</Text>;
  }
  if (hasPermission === false) {
    return <Text>Accès refusé</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodescanner}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        <View style={styles.icons}>
          <View style={styles.icon1}>
            <Entypo name="flashlight" size={24} color="black" />
          </View>
          <View style={styles.icon2}>
            <FontAwesome5 name="carrot" size={24} color="orange" />
          </View>
          <View style={styles.icon3}>
            <AntDesign name="sound" size={24} color="black" />
          </View>
        </View>

        <View style={styles.square}></View>
      </View>
      <View style={styles.doitagain}>
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "transparent",
    width: 350,
  },

  icon1: {
    backgroundColor: "transparent",
    borderRadius: 30,
    marginLeft: -40,
  },

  icon2: {
    backgroundColor: "transparent",
    borderRadius: 30,
  },

  icon3: {
    backgroundColor: "transparent",
    borderRadius: 30,
  },
  barcodescanner: {
    position: "absolute",
    height: 412,
    width: 400,
  },

  square: {
    width: 250,
    height: 200,
    backgroundColor: "transparent",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 4,
    marginTop: 100,
    marginLeft: 33,
  },

  doitagain: {
    marginTop: 350,
  },
});

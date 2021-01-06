import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Splash from "./containers/SplashScreen";
import ScanScreen from "./containers/CameraScreen";
import Home from "./containers/ProductsScreen";
import ProductScreen from "./containers/ProductScreen";
import Favorite from "./containers/FavoritesScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { set } from "react-native-reanimated";
import Logo from "./assets/Logo.png";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab">
          {() => (
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: "orange",
                inactiveTintColor: "white",
                style: { backgroundColor: "#5DCC71" },
              }}
            >
              <Tab.Screen
                name="Home"
                options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="carrot" size={24} color={color} />
                  ),
                }}
              >
                {(props) => (
                  <Stack.Navigator>
                    <Stack.Screen
                      name="Home"
                      // options={
                      //   {
                      //      headerTitle: () => <Logo />,
                      //   }
                      // }
                    >
                      {() => <Home {...props} />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
              <Tab.Screen
                name="Scan"
                options={{
                  tabBarLabel: "Scan",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="barcode-scan"
                      size={24}
                      color={color}
                    />
                  ),
                }}
              >
                {() => {
                  return (
                    <Stack.Navigator>
                      <Stack.Screen name="Scan">
                        {(props) => <ScanScreen {...props} />}
                      </Stack.Screen>
                      <Stack.Screen name="Product">
                        {(props) => <ProductScreen {...props} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  );
                }}
              </Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

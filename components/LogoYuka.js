import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LogoYukaScreen() {
  // recuperer id qui correspond a data avec route

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image style={styles.tinyLogo} source={require("")} />
    </View>
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

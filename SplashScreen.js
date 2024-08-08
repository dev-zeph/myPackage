import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
// RNFES- React Native Functional Export with style. rnfes. Type it to start coding for use.

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.TextBold}> Revive.</Text>
      <StatusBar style="auto" hidden />
      {/* View is a div.*/}
      {/* To show text in react, use <Text container> */}
      {/* Style is defined in StyleSheet.create */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    backgroundColor: "#C5E242",
    alignItems: "center",
    justifyContent: "center",
  },
  TextBold: {
    fontSize: 50,
    fontWeight: "900",
    color: "white",
  },
});

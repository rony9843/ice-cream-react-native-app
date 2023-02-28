import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home";
import ProductPage from "./ProductPage";
import ShoppingCardPage from "./ShoppingCardPage";

export default function StacKScreen() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          options={{
            tabBarStyle: { backgroundColor: "#222" },
          }}
          name="Product"
          component={ProductPage}
        />
        <Stack.Screen name="ShoppingCard" component={ShoppingCardPage} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

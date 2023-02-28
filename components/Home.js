import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Layout from "./Layout";

const Home = ({ route }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Layout></Layout>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;

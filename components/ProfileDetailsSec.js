import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProfileDetailsSec = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontSize: 14, color: "#A7A7A7", fontWeight: "bold" }}>
          Details
        </Text>
      </View>
      <View>
        <View style={styles.detailsContainer}>
          <View
            style={{
              backgroundColor: "#FFA7DF",
              padding: 5,
              borderRadius: 50,
              marginRight: 5,
              marginTop: 5,
            }}
          >
            <Image
              style={{ height: 15, width: 15 }}
              source={require("../assets/placeholder.png")}
            />
          </View>
          <View>
            <Text style={{ color: "#FD003A", fontSize: 13 }}>
              Riyadh, Saudi Arabia
            </Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View
            style={{
              backgroundColor: "#69D1D9",
              padding: 5,
              borderRadius: 50,
              marginRight: 5,
              marginTop: 5,
            }}
          >
            <Image
              style={{ height: 15, width: 15 }}
              source={require("../assets/envelope.png")}
            />
          </View>
          <View>
            <Text style={{ color: "#1874DA", fontSize: 13 }}>
              rony13647@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View
            style={{
              backgroundColor: "#FF99BA",
              padding: 5,
              borderRadius: 50,
              marginRight: 5,
              marginTop: 5,
            }}
          >
            <Image
              style={{ height: 15, width: 15 }}
              source={require("../assets/instagram.png")}
            />
          </View>
          <View>
            <Text style={{ color: "#CA38A4", fontSize: 13 }}>
              _.jubayth._.hossen._.roni._
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },

  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProfileDetailsSec;

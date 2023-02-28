import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProfileDetailsSec from "./ProfileDetailsSec";

const UserProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.headerTextAndDotsContainer}>
          <View style={styles.headerTextContainer}>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, color: "#414141" }}
            >
              My Profile
            </Text>
          </View>
          <View>
            <Image
              style={styles.dotsImage}
              source={require("../assets/dots.png")}
            />
          </View>
        </View>
        <View>
          <View style={styles.profileImageAndNameContainer}>
            <View>
              <Image
                style={{ height: 120, width: 120, borderRadius: 100 }}
                source={require("../assets/main_2.jpg")}
              />
            </View>
            <View>
              <View>
                <Text
                  style={{
                    color: "#FCA772",
                    fontSize: 20,
                    marginTop: 7,
                    fontWeight: "bold",
                  }}
                >
                  Jubayth Hossen Roni
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 14, color: "#A7A7A7" }}
                >
                  Welcome To My World
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <View>
            <Text
              style={{ color: "#A7A7A7", fontSize: 14, fontWeight: "bold" }}
            >
              My Status
            </Text>
          </View>

          <View style={styles.statusInfo}>
            <View style={styles.programmerContainer}>
              <Text style={{ color: "#fff" }}>👨‍💻 Programmer</Text>
            </View>
            <View style={styles.graphicDesignerContainer}>
              <Text style={{ color: "#fff" }}>🎨 Graphic Designer</Text>
            </View>
          </View>
        </View>
        <View>
          <ProfileDetailsSec></ProfileDetailsSec>
        </View>
        <View style={{ marginTop: 15 }}>
          <View>
            <Text
              style={{ fontSize: 14, color: "#A7A7A7", fontWeight: "bold" }}
            >
              Order Status
            </Text>
          </View>
          <View
            style={{
              marginTop: 13,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderRadius: 50,
                  backgroundColor: "#99FFAD",
                  padding: 5,
                  fontSize: 12,
                }}
              >
                <Text style={{ fontSize: 12 }}>✅</Text>
              </View>

              <Text style={{ color: "#4ED197", marginLeft: 5 }}>Complete</Text>
            </View>
            <View
              style={{
                backgroundColor: "#4ED197",
                paddingHorizontal: 25,
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 12 }}>
                3 Orders
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#F1F14B",

                  borderRadius: 50,

                  padding: 5,
                  fontSize: 12,
                }}
              >
                <Text style={{ fontSize: 12 }}>⌛</Text>
              </View>

              <Text style={{ color: "#FFA500", marginLeft: 5 }}>Pending</Text>
            </View>
            <View
              style={{
                backgroundColor: "#FFA500",
                paddingHorizontal: 25,
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 12 }}>
                2 Orders
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    PaddingTop: 20,
    backgroundColor: "#FFF9F3",
    flex: 1,
  },

  headerTextAndDotsContainer: {
    marginTop: 25,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  headerTextContainer: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  dotsImage: {
    height: 17,
    width: 20,
  },
  profileImageAndNameContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 50,

    shadowColor: "#ff0000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  statusContainer: {
    marginTop: 20,
  },
  statusInfo: {
    flexDirection: "row",
    marginTop: 10,
  },
  programmerContainer: {
    backgroundColor: "#D14E68",
    padding: 5,
    borderRadius: 40,
    paddingHorizontal: 8,
    shadowColor: "#D14E68",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  graphicDesignerContainer: {
    backgroundColor: "#67A3E9",
    padding: 5,
    borderRadius: 40,
    paddingHorizontal: 8,
    marginHorizontal: 10,
    shadowColor: "#67A3E9",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
});

export default UserProfileScreen;

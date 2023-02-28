import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const BottomTab = ({ pageLocation }) => {
  const navigation = useNavigation();

  console.log("this is props", pageLocation);
  console.log("this is props", Platform.OS);
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: Platform.OS === "ios" ? 30 : 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={pageLocation === "Home" ? styles.ActiveImg : styles.img}
            source={require("../assets/shop.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.img} source={require("../assets/giftbox.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.img} source={require("../assets/Offer.png")} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.img} source={require("../assets/user.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 30,
    width: 30,
    opacity: 0.5,
  },
  ActiveImg: {
    height: 30,
    width: 30,
  },
});

export default BottomTab;

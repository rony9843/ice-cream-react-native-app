import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserInfoContext } from "../App";

const OrderCard = ({ dt }) => {
  const navigation = useNavigation();

  // ? context state
  const [contextCard, setContextCard] = useContext(UserInfoContext);

  // ? delete card for context
  const deleteCard = () => {
    id = dt.id;

    setContextCard(contextCard.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Product")}
            style={styles.imageContainer}
          >
            <Image
              style={styles.image}
              source={require("../assets/ice-cream.png")}
            />
          </TouchableOpacity>
          <View style={styles.orderDetails}>
            <View style={styles.productNameAndDeleteBtn}>
              <View style={styles.productNameContainer}>
                <Text style={styles.productName}>Moon Popsicle Stick</Text>
              </View>
              <TouchableOpacity
                onPress={() => deleteCard()}
                style={styles.deleteContainer}
              >
                <Image
                  style={styles.deleteImage}
                  source={require("../assets/delete.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>
              <View style={styles.btnQtyContainer}>
                <Text style={{ textAlign: "center", color: "#EE8E51" }}>
                  {dt.qty}
                </Text>
              </View>
              <View style={styles.btnQtyAndTotalContainer}>
                <Text style={{ textAlign: "center", color: "#EE8E51" }}>
                  {dt.total}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    borderRadius: 20,
    margin: 10,
    shadowRadius: 6,
    shadowOpacity: 0.1,
  },

  cardContainer: {
    flexDirection: "row",
    padding: 10,
  },
  orderDetails: {
    flex: 1,
  },

  imageContainer: {},

  image: {
    width: 40,
    height: 80,
  },

  deleteImage: {
    width: 20,
    height: 20,
  },
  productNameAndDeleteBtn: {
    flexDirection: "row",
    flex: 1,
  },
  productNameContainer: {},
  productName: {
    fontSize: 16,
    paddingLeft: 20,
    color: "gray",
  },
  deleteContainer: {
    flex: 1,
    alignItems: "flex-end",
    alignContent: "flex-end",
  },
  btnContainer: {
    alignItems: "flex-end",
    flex: 1,
    flexDirection: "row",
    alignContent: "flex-end",
    justifyContent: "flex-end",
  },
  btnQtyContainer: {
    padding: 5,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: 80,

    borderColor: "#EE8E51",
    marginRight: 10,
    borderRadius: 10,
  },
  btnQtyAndTotalContainer: {
    padding: 5,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: 80,

    borderColor: "#EE8E51",

    borderRadius: 10,
  },
});

export default OrderCard;

import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { UserInfoContext } from "../App";
import OrderCard from "./OrderCard";
import OrderSubmitBtn from "./OrderSubmitBtn";

const ShoppingCardPage = () => {
  const navigation = useNavigation();

  const [contextCard, setContextCard] = useContext(UserInfoContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.ProductSec}>
        <View style={styles.topNavContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              style={styles.navImage}
              source={require("../assets/reply.png")}
            />
          </TouchableOpacity>
          <View style={styles.cardContainer}>
            <View>
              <Text style={styles.cardTitle}>My Card</Text>
            </View>
            <View>
              <View>
                <View height="93%" showsVerticalScrollIndicator={false}>
                  {contextCard &&
                    contextCard.map((dt) => (
                      <OrderCard dt={dt} key={dt.id}></OrderCard>
                    ))}
                  <View style={styles.towBtnContainer}>
                    <View>
                      <Text style={styles.btnDelivery}>Delivery To</Text>
                    </View>
                    <View style={styles.btnHome}>
                      <Text style={{ borderRadius: 10 }}>Home</Text>
                    </View>
                  </View>
                  <OrderSubmitBtn contextCard={contextCard}></OrderSubmitBtn>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FFF8F2",
  },

  navImage: {
    margin: 10,
    padding: 10,
    height: 30,
    width: 30,
  },

  ProductSec: {
    paddingTop: 45,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  towBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btnHome: {
    marginHorizontal: 10,
    color: "#EE8E51",
    padding: 10,
    fontSize: 16,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  btnDelivery: {
    color: "#EE8E51",
    padding: 10,
    fontSize: 16,
  },
});

export default ShoppingCardPage;

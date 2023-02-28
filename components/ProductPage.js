import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserInfoContext } from "../App";

// rnfe

const ProductPage = (props) => {
  const navigation = useNavigation();

  const [contextCard, setContextCard] = useContext(UserInfoContext);

  const [select, setSelect] = useState(false);

  const [count, setCount] = useState(1);

  const [displayAdd, setDisplayAdd] = useState(false);

  useEffect(() => {
    if (displayAdd) {
      setTimeout(() => {
        setDisplayAdd(false);
      }, 2000);
    }
  }, [displayAdd]);

  const addOrder = () => {
    setDisplayAdd(true);

    // boilerplate
    const order = {
      id: Math.floor(100000000 + Math.random() * 900000000),
      qty: count,
      total: parseFloat(count * 3.99).toFixed(2),
    };

    setContextCard([order, ...contextCard]);
  };

  const obj = {
    navigation: {
      addListener: "[Function addListener]",
      canGoBack: "[Function canGoBack]",
      dispatch: "[Function dispatch]",
      getId: "[Function getId]",
      getParent: "[Function getParent]",
      getState: "[Function anonymous]",
      goBack: "Function anonymous]",
      isFocused: "[Function isFocused]",
      navigate: "[Function anonymous]",
      pop: " [Function anonymous]",
      popToTop: "[Function anonymous]",
      push: "[Function ",
      removeListener: "[Function removeListener]",
      replace: "[Function anonymous]",
      reset: "[Function anonymous]",
      setOptions: "[Function setOptions]",
      setParams: "[Function anonymous]",
    },
    route: {
      key: "Product-JJL0iu9_JIqfek-6ymosp",
      name: "Product",
      params: { names: [Array] },
      path: undefined,
    },
  };

  return (
    <View style={styles.container}>
      {displayAdd && (
        <View
          style={{
            position: "absolute",
            top: 50,
            zIndex: 999,
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderRadius: 20,
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0.7,
              backgroundColor: "#0F3F32",
              borderWidth: 3,
              borderColor: "#6AE79C",
            }}
          >
            <Text
              style={{
                color: "#6AE79C",

                padding: 5,
                paddingLeft: 50,
                paddingRight: 50,
              }}
            >
              Added
            </Text>
          </View>
        </View>
      )}

      <View style={styles.ProductSec}>
        <View style={styles.topNavContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Image
              style={styles.navImage}
              source={require("../assets/reply.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect(!select)}>
            {select ? (
              <Image
                style={styles.navImage}
                source={require("../assets/heartSelected.png")}
              />
            ) : (
              <Image
                onPress={() => setSelect(!select)}
                style={styles.navImage}
                source={require("../assets/heart.png")}
              />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.productContainer}>
            <View>
              <Image
                style={styles.productImage}
                source={require("../assets/ice-cream.png")}
              />
            </View>
            <View style={styles.countAndPriceContainer}>
              <View style={styles.countContainer}>
                <TouchableOpacity
                  onPress={() => setCount(count < 10 ? count + 1 : 10)}
                  style={styles.imageContainer}
                >
                  <Image
                    style={styles.countBtnImage}
                    source={require("../assets/add.png")}
                  />
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                  <Text
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: 20,
                      color: "#fff",
                    }}
                  >
                    {count}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => setCount(count > 1 ? count - 1 : 1)}
                  style={styles.imageContainer}
                >
                  <Image
                    style={styles.countBtnImage}
                    source={require("../assets/minus.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.priceContainer}>
                <View>
                  <Text
                    style={{ fontSize: 30, color: "#fff", marginBottom: 10 }}
                  >
                    $ {parseFloat(count * 3.99).toFixed(2)}
                  </Text>
                </View>
                <View>
                  <Text style={{ letterSpacing: 2 }}>⭐⭐⭐⭐⭐</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.productDetailsAndButtonContainer}>
        <View style={styles.productTitleContainer}>
          <Text style={styles.productTitle}>Moon Popsicle Stick</Text>
        </View>
        <View style={styles.productDetailsContainer}>
          <Text style={styles.productDetails}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus sit,
            consequatur reiciendis aliquam fugit sapiente harum cum aliquid
            quibusdam, saepe quas hic tempora voluptate
          </Text>
        </View>

        <View style={styles.productAddAndViewBtnContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ShoppingCard");
            }}
            style={styles.productViewBtnContainer}
          >
            <Text style={styles.productViewBtn}>View</Text>
            <Text style={styles.productViewBtn}>ingredients</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => addOrder()}
            style={styles.productOrderBtnContainer}
          >
            <Text style={styles.productOrderBtn}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#FFF8F2",
  },

  topNavContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  navImage: {
    margin: 10,
    padding: 10,
    height: 30,
    width: 30,
  },

  ProductSec: {
    paddingTop: 45,
    backgroundColor: "#F19356",
    paddingLeft: 10,
    paddingRight: 10,
    height: "60%",
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
  productImage: {
    width: 150,
    height: 300,
  },
  countBtnImage: {
    width: 20,
    height: 20,
  },
  countAndPriceContainer: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "flex-end",
  },
  countContainer: {
    marginBottom: 60,
  },
  imageContainer: {
    padding: 10,
    backgroundColor: "#F4A974",
    borderRadius: 10,
    marginTop: 10,
  },
  priceContainer: {
    alignItems: "flex-end",
  },

  productDetailsAndButtonContainer: {
    margin: 20,
    marginRight: 35,
    marginLeft: 35,
    flex: 1,
    justifyContent: "space-between",
  },
  productTitle: {
    fontSize: 30,
  },
  productDetails: {
    fontSize: 12,
    color: "#F4A974",
    lineHeight: 18,
    // marginTop: 20,
  },
  productAddAndViewBtnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // marginTop: 40,
  },

  productOrderBtnContainer: {
    flex: 0.5,
    backgroundColor: "#F4A974",
    margin: 10,
    height: 70,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignContent: "center",
  },
  productViewBtnContainer: {
    flex: 0.5,
    backgroundColor: "#fff",
    margin: 10,
    height: 70,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignContent: "center",
  },
  productViewBtn: {
    fontSize: 20,
    color: "#F4A974",
  },
  productOrderBtn: {
    fontSize: 20,
    color: "#fff",
  },
});

export default ProductPage;

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const OrderSubmitBtn = ({ contextCard }) => {
  // ? total
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    console.log(contextCard);

    let filterTotal = contextCard.map((item) => eval(item.total));
    console.log("filterTotal", filterTotal);
    let sum = 0;

    //const filterTotalSum = filterTotal.map((item) => (sum = sum + item));

    // setSubTotal(parseFloat(filterTotalSum).toFixed(2));
    // console.log("filterTotalSum", filterTotalSum);
    setSubTotal(
      parseFloat(
        filterTotal.map((dt) => (sum = sum + dt)).slice(-1)[0]
      ).toFixed(2)
    );
  }, [contextCard]);

  return (
    <View style={styles.container}>
      <View style={styles.btnBoxContainer}>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsTotalContainer}>
            <Text
              style={{ color: "#EE8E51", fontSize: 25, fontWeight: "bold" }}
            >
              $ {subTotal}
            </Text>
          </View>
          <View style={styles.detailsTextContainer}>
            <Text style={{ color: "#EE8E51", fontSize: 12 }}>Your Details</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnTitle}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },

  btnBoxContainer: {
    flex: 1,

    backgroundColor: "#fff",

    padding: 20,
    flexDirection: "row",
    paddingVertical: 30,

    justifyContent: "space-between",
    borderRadius: 20,
  },

  btnContainer: {
    backgroundColor: "#EE8E51",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  btnTitle: {
    color: "#fff",
  },
});

export default OrderSubmitBtn;

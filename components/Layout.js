import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Layout() {
  const navigation = useNavigation();

  // ? option
  const [option, setOption] = useState("All");

  console.log(option);

  // ? product
  const [product, setProduct] = useState(1);

  console.log(`${new Date()} --> `, product);

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <View style={styles.menu}>
          <TouchableOpacity>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/menu.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.home}>
          <TouchableOpacity
            onPress={() => {
              setProduct(1);
              navigation.navigate("ShoppingCard", {
                names: ["Brent", "Satya", "Michaś"],
              });
            }}
          >
            <Image
              style={styles.tinyLogo}
              source={require("../assets/shoppingCard.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View>
          <View style={styles.searchBox}>
            <View>
              <TouchableOpacity>
                <Image
                  style={styles.searchIcon}
                  source={require("../assets/magnifying-glass.png")}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TextInput
                onChangeText={(e) => console.log("user value -> ", e)}
                placeholderTextColor="#FFF8F2"
                style={styles.searchInput}
                placeholder="Search"
              />
            </View>
          </View>

          <View>
            <View style={styles.optionsContainer}>
              <TouchableOpacity
                onPress={() => {
                  setOption("All");
                }}
                style={
                  option === "All" ? styles.optionBoxActive : styles.optionBox
                }
              >
                <Text
                  style={option === "All" ? styles.optionActive : styles.option}
                >
                  All
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setOption("New")}
                style={
                  option === "New" ? styles.optionBoxActive : styles.optionBox
                }
              >
                <Text
                  style={option === "New" ? styles.optionActive : styles.option}
                >
                  New
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setOption("Old")}
                style={
                  option === "Old" ? styles.optionBoxActive : styles.optionBox
                }
              >
                <Text
                  style={option === "Old" ? styles.optionActive : styles.option}
                >
                  Old
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productContainer}>
              <View style={styles.product1stRow}>
                <TouchableOpacity
                  onPress={() => {
                    setProduct(1);
                    navigation.navigate("Product", {
                      names: ["Brent", "Satya", "Michaś"],
                    });
                  }}
                  style={
                    product === 1 ? styles.productBoxActive : styles.productBox
                  }
                >
                  <Image
                    style={styles.productImage}
                    source={require("../assets/ice-cream.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setProduct(2);
                    navigation.navigate("Product", {
                      names: ["Brent", "Satya", "Michaś"],
                    });
                  }}
                  style={
                    product === 2 ? styles.productBoxActive : styles.productBox
                  }
                >
                  <Image
                    style={styles.productImage}
                    source={require("../assets/ice-cream.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.product2endRow}>
                <TouchableOpacity
                  onPress={() => {
                    setProduct(3);
                    navigation.navigate("Product", {
                      names: ["Brent", "Satya", "Michaś"],
                    });
                  }}
                  style={
                    product === 3 ? styles.productBoxActive : styles.productBox
                  }
                >
                  <Image
                    style={styles.productImage}
                    source={require("../assets/ice-cream.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setProduct(4);
                    navigation.navigate("Product", {
                      names: ["Brent", "Satya", "Michaś"],
                    });
                  }}
                  style={
                    product === 4 ? styles.productBoxActive : styles.productBox
                  }
                >
                  <Image
                    style={styles.productImage}
                    source={require("../assets/ice-cream.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.product2endRow}>
                <TouchableOpacity
                  onPress={() => {
                    setProduct(5);
                    navigation.navigate("Product", {
                      names: ["Brent", "Satya", "Michaś"],
                    });
                  }}
                  style={
                    product === 5 ? styles.productBoxActive : styles.productBox
                  }
                >
                  <Image
                    style={styles.productImage}
                    source={require("../assets/ice-cream.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setProduct(6);
                    navigation.navigate("Product", {
                      names: ["Brent", "Satya", "Michaś"],
                    });
                  }}
                  style={
                    product === 6 ? styles.productBoxActive : styles.productBox
                  }
                >
                  <Image
                    style={styles.productImage}
                    source={require("../assets/ice-cream.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.product2endRow}>
                <TouchableOpacity
                  onPress={() => {
                    setProduct(7);
                    navigation.navigate("Product", {
                      names: ["Brent", "Satya", "Michaś"],
                    });
                  }}
                  style={
                    product === 7 ? styles.productBoxActive : styles.productBox
                  }
                >
                  <Image
                    style={styles.productImage}
                    source={require("../assets/ice-cream.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setProduct(8)}
                  style={
                    product === 8 ? styles.productBoxActive : styles.productBox
                  }
                >
                  <Image
                    style={styles.productImage}
                    source={require("../assets/ice-cream.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
    backgroundColor: "#FFF8F2",
    padding: 20,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "space-between",
  },
  menu: { flex: 1, alignItems: "flex-start" },
  home: { flex: 1, alignItems: "flex-end" },
  tinyLogo: {
    margin: 10,
    padding: 10,
    height: 25,
    width: 25,
  },

  searchBox: {
    marginTop: 15,
    height: 50,
    backgroundColor: "#FBAA73",
    borderRadius: 15,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    padding: 10,
  },
  searchIcon: { height: 20, width: 20, marginRight: 10 },
  searchInput: { fontSize: 18, color: "#fff" },
  optionsContainer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  optionBoxActive: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#FBAA73",
    margin: 10,
    padding: 8,
    borderRadius: 10,

    borderWidth: 1,
    borderColor: "#FBAA73",
  },
  optionBox: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FBAA73",
    margin: 10,
    padding: 8,
    borderRadius: 10,
  },
  optionActive: {
    color: "#FFF8F2",
  },
  option: {
    color: "#E98140",
  },
  productContainer: {
    marginTop: 0,
    alignItems: "center",
    paddingBottom: 100,
  },
  productBoxActive: {
    backgroundColor: "#E98140",
    margin: 5,
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  productBox: {
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  product1stRow: {
    flexDirection: "row",
  },
  product2endRow: {
    flexDirection: "row",
  },
  productImage: {
    width: 150,
    height: 150,
  },
});

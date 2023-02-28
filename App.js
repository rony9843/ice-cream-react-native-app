import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Image } from "react-native";

import GiftScreen from "./components/GiftScreen";
import OfferScreen from "./components/OfferScreen";
import StacKScreen from "./components/StackScreen";
import UserProfileScreen from "./components/UserProfileScreen";

const Tab = createBottomTabNavigator();

// user info create context
export const UserInfoContext = React.createContext();

export default function App() {
  const [contextCard, setContextCard] = React.useState([]);

  return (
    <UserInfoContext.Provider value={[contextCard, setContextCard]}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            options={{
              title: "Shop",
              tabBarIcon: ({ size, focused, color }) => {
                return (
                  <Image
                    style={{
                      width: size,
                      height: size,
                      opacity: focused ? 1 : 0.5,
                    }}
                    source={require("./assets/shop.png")}
                  />
                );
              },
            }}
            name="Main"
            component={StacKScreen}
          />
          <Tab.Screen
            options={{
              title: "Gift",
              tabBarIcon: ({ size, focused, color }) => {
                return (
                  <Image
                    style={{
                      width: size,
                      height: size,
                      opacity: focused ? 1 : 0.5,
                    }}
                    source={require("./assets/giftbox.png")}
                  />
                );
              },
            }}
            name="Gift"
            component={GiftScreen}
          />
          <Tab.Screen
            options={{
              title: "Offer",
              tabBarIcon: ({ size, focused, color }) => {
                return (
                  <Image
                    style={{
                      width: size,
                      height: size,
                      opacity: focused ? 1 : 0.5,
                    }}
                    source={require("./assets/Offer.png")}
                  />
                );
              },
            }}
            name="Offer"
            component={OfferScreen}
          />
          <Tab.Screen
            options={{
              title: "Me",
              tabBarIcon: ({ size, focused, color }) => {
                return (
                  <Image
                    style={{
                      width: size,
                      height: size,
                      opacity: focused ? 1 : 0.5,
                      borderRadius: 50,
                    }}
                    source={require("./assets/main_2.jpg")}
                  />
                );
              },
            }}
            name="User"
            component={UserProfileScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </UserInfoContext.Provider>
  );
}

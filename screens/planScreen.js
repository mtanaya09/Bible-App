import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MyPlans from "../PlansButton/MyPlans";
import FindPlans from "../PlansButton/FindPlans";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="My Plans"
      tabBarOptions={{
        activeTintColor: "black",
        labelStyle: { fontSize: 13, fontWeight: "bold" },

        indicatorStyle: {
          backgroundColor: "red",
        },

        style: {
          marginTop: insets.top,
          marginRight: 118,
          elevation: 0,
          shadowOpacity: 0,
          borderWidth: 0,
          backgroundColor: "#ffffff",
        },
      }}
      style={{ backgroundColor: "#ffffff" }}
    >
      <Tab.Screen
        name="My Plans"
        component={MyPlans}
        option={{ tabBarLabel: "MyPlans" }}
      />

      <Tab.Screen
        name="Find Plans"
        component={FindPlans}
        option={{ tabBarLabel: "FindPlans" }}
      />
    </Tab.Navigator>
  );
}

export default function PlanScreen() {
  return <MyTabs />;
}

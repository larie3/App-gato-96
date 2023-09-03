import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./TabNavigator";
import Home from "../screens/Home";
import More from "../screens/More";
import Food from "../screens/Food";
import Tips from "../screens/Tips";
import Toys from "../screens/Toys";


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Guia"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Guia" component={BottomTabNavigator} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="Tips" component={Tips} />
      <Stack.Screen name="Toys" component={Toys} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

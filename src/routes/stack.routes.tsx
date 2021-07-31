import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Scheduling } from "../screens/Scheduling";
import { CarDetails } from "../screens/CarDetails";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { SchedulingComplete } from "../screens/SchedulingComplete";

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Scheduling" component={Scheduling} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Stack.Screen name="SchedulingComplete" component={SchedulingComplete} />
    </Stack.Navigator>
  );
}

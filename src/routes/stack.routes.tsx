import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";
import { Scheduling } from "../screens/Scheduling";
import { CarDetails } from "../screens/CarDetails";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { Confirmation } from "../screens/Confirmation";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="SignIn">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Stack.Screen name="SignUpSecondStep" component={SignUpSecondStep} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name="Scheduling" component={Scheduling} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="MyCars" component={MyCars} />
    </Stack.Navigator>
  );
}

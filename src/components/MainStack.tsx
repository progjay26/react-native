import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { HomeScreen } from "./HomeScreen";
import { DishDetailScreen } from "./DishDetailScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#FF6B6B",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Food App" }}
            />
            <StackNavigator.Screen
                name="DishDetail"
                component={DishDetailScreen}
                options={({ route }) => ({ title: route.params.name })}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
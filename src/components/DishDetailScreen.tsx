import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type DishDetailScreenProps = {
    route: RouteProp<MainStackParamList, "DishDetail">,
    navigation: FrameNavigationProp<MainStackParamList, "DishDetail">,
};

const dishes = [
    { id: 1, name: "Pizza Margherita", description: "Classic Italian pizza with tomatoes and mozzarella" },
    { id: 2, name: "Sushi Roll", description: "Fresh Japanese sushi with various fillings" },
    { id: 3, name: "Burger", description: "Juicy beef patty with lettuce, tomato, and cheese" },
    { id: 4, name: "Pad Thai", description: "Thai stir-fried rice noodles with shrimp, tofu, and peanuts" },
];

export function DishDetailScreen({ route }: DishDetailScreenProps) {
    const { id } = route.params;
    const dish = dishes.find((d) => d.id === id);

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-3xl font-bold mb-4">
                {dish.name}
            </label>
            <label className="text-lg mb-4">
                {dish.description}
            </label>
            <button
                className="bg-green-500 text-white p-2 rounded"
                onTap={() => alert("Order placed!")}
            >
                Order Now
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
});
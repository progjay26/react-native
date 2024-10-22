import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

const dishes = [
    { id: 1, name: "Pizza Margherita", description: "Classic Italian pizza with tomatoes and mozzarella" },
    { id: 2, name: "Sushi Roll", description: "Fresh Japanese sushi with various fillings" },
    { id: 3, name: "Burger", description: "Juicy beef patty with lettuce, tomato, and cheese" },
    { id: 4, name: "Pad Thai", description: "Thai stir-fried rice noodles with shrimp, tofu, and peanuts" },
];

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <scrollView height="100%">
            <stackLayout style={styles.container}>
                <label className="text-2xl font-bold text-center mb-4">
                    Our Menu
                </label>
                {dishes.map((dish) => (
                    <button
                        key={dish.id}
                        className="bg-orange-500 text-white p-4 rounded-lg mb-2"
                        onTap={() => navigation.navigate("DishDetail", { id: dish.id, name: dish.name })}
                    >
                        {dish.name}
                    </button>
                ))}
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20,
    },
});
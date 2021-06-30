import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";

const MealList = (props) => {
  const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);
  const renderItem = ({ item }) => {
    const isFavourite = favouriteMeals.find((meal) => meal.id === item.id);
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        image={item.imageUrl}
        affordability={item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate("MealDetail", {
            mealId: item.id,
            mealTitle: item.title,
            isFav: isFavourite,
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        renderItem={renderItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;

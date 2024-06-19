import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScree";
import MealsOverviewScreen from "./screens/MealsOverViewScreen";
import MealDetails from "./screens/MealDetails";
import MealDetailsScreen from "./screens/MealDetails";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoritesScree";
import FavoritesContextProvider from "./store/context/redux/favorites-context";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              headerStyle: { backgroundColor: "grey" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "white" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={CategoriesScreen}
              options={{
                title: "All Meals",
              }}
            />
            <Stack.Screen
              name="MealsOverView"
              component={MealsOverviewScreen}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }} setting iptions dynaimicaly and taking route spexcific data
            />

            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
            <Stack.Screen name="favorites" component={FavoriteScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

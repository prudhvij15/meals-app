import { useState } from "react";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, FlatListComponent } from "react-native";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}
function CategoriesScreen() {
  const [numColumns, setnumColumns] = useState(2);
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={"2"}
    />
  );
}

export default CategoriesScreen;

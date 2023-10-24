import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { sortCategoryData } from "../constants";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../theme";

const SortCategories = () => {
  const [activeSort, setActiveSort] = useState("Popular");
  return (
    <View className="flex-row justify-around p-2 px-4 space-x-4 items-center mx-4 bg-neutral-100 rounded-full">
      {sortCategoryData.map((sort, index) => {
        let isActive = sort === activeSort;
        let activeButtonClass = isActive ? "bg-white shadow" : "";
        return (
          <TouchableOpacity
            key={index}
            className={`p-3 px-4 rounded-full flex ${activeButtonClass}`}
            onPress={() => setActiveSort(sort)}
          >
            <Text
              className="font-semibold"
              style={{
                fontSize: wp(4),
                color: isActive ? theme.text : "rgba(0,0,0,0.6) ",
              }}
            >
              {sort}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SortCategories;

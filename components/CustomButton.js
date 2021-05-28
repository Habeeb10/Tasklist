import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const OpenAndClose = ({ onPress, isAdding }) => {
  return (
    <TouchableOpacity
      style={[styles.touches, isAdding && styles.red]}
      onPress={onPress}
    >
      <Text style={{ color: "white", fontSize: 17 }}>
        {isAdding ? "Close" : "Add"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touches: {
    width: 70,
    height: 50,
    backgroundColor: "green",
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  red: {
    backgroundColor: "red",
    width: 90,
  },
});

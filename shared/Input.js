import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import * as colors from "../common/colors";

export const Input = ({
  placeHolder,
  style,
  inputStyle,
  type,
  onChange,
  secure,
  value,
}) => {
  return (
    <View style={{ marginTop: 40 }}>
      <View style={[styles.container, style]}>
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeHolder}
          placeholderTextColor={colors.deepblue}
          value={value}
          keyboardType={type}
          onChangeText={onChange}
          secureTextEntry={secure}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.wheat,
    alignSelf: "center",
    width: "90%",
    borderRadius: 10,
    height: 55,
    marginTop: 15,
    alignItems: "flex-start",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "skyblue",
  },
  input: {
    fontSize: 18,
    color: colors.deepblue,
    marginLeft: 15,
    width: "100%",
  },
});

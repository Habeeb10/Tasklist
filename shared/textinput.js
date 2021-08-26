import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import * as colors from "../common/colors";

export const Textinput = ({
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
          placeholderTextColor={colors.deepgray}
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
    borderWidth: 1,
    width: "95%",
    height: 80,
    backgroundColor: colors.wheat,
    borderWidth: 1,
    borderColor: "skyblue",
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 30,
    paddingHorizontal: 15,
  },
  input: {
    fontSize: 18,
    color: colors.deepblue,
    marginLeft: 15,
    marginTop: 20,
  },
});
